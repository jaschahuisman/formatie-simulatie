import { NextRequest } from "next/server";
import { createLogger } from "@/lib/logger";
import {
  createGesprek,
  addBerichtenToGesprek,
  getAllDeelnemers,
} from "@/repository";
import { genereerGesprekBerichten } from "@/lib/live-formatie/genereer-gesprek-berichten";
import { genereerCompromis } from "@/lib/live-formatie/genereer-compromis";
import { checkContentSafety, genereerTitel } from "@/lib/live-formatie/genereer-titel";
import { GESPREK_DURATION_MINUTES, MIN_DEELNEMERS_FOR_GESPREK } from "@/config";

const logger = createLogger("api/gesprekken");

export async function POST(request: NextRequest) {
  const encoder = new TextEncoder();

  // Create a TransformStream to send SSE
  const stream = new TransformStream();
  const writer = stream.writable.getWriter();

  // Helper function to send SSE events
  const sendEvent = async (data: {
    type: "progress" | "complete" | "error";
    percentage?: number;
    message?: string;
    gesprekId?: number;
  }) => {
    const eventData = `data: ${JSON.stringify(data)}\n\n`;
    await writer.write(encoder.encode(eventData));
  };

  // Start async generation process
  (async () => {
    try {
      const body = await request.json();
      const { onderwerp, deelnemerIds } = body;

      logger.info("Creating new gesprek", { onderwerp, deelnemerIds });

      // Validation
      if (!onderwerp || !deelnemerIds || !Array.isArray(deelnemerIds)) {
        await sendEvent({
          type: "error",
          message: "Invalid request body",
        });
        await writer.close();
        return;
      }

      if (deelnemerIds.length < MIN_DEELNEMERS_FOR_GESPREK) {
        await sendEvent({
          type: "error",
          message: `Minimaal ${MIN_DEELNEMERS_FOR_GESPREK} deelnemers vereist`,
        });
        await writer.close();
        return;
      }

      // Step 1: Content safety check (0%)
      await sendEvent({
        type: "progress",
        percentage: 0,
        message: "Content controleren...",
      });

      const safetyCheck = await checkContentSafety(onderwerp);
      if (!safetyCheck.safe) {
        await sendEvent({
          type: "error",
          message: "Dit onderwerp wordt niet ondersteund. Kies een ander onderwerp voor het formatiegesprek.",
        });
        await writer.close();
        return;
      }

      // Step 2: Generate sanitized title (5%)
      await sendEvent({
        type: "progress",
        percentage: 5,
        message: "Titel genereren...",
      });

      const gesaniteerdOnderwerp = await genereerTitel(onderwerp);
      logger.info("Title generated", {
        original: onderwerp,
        sanitized: gesaniteerdOnderwerp,
      });

      // Step 3: Fetch deelnemers (10%)
      await sendEvent({
        type: "progress",
        percentage: 10,
        message: "Deelnemers ophalen...",
      });

      const alleDeelnemers = await getAllDeelnemers();
      const geselecteerdeDeelnemers = alleDeelnemers.filter((d) =>
        deelnemerIds.includes(d.id)
      );

      if (geselecteerdeDeelnemers.length !== deelnemerIds.length) {
        await sendEvent({
          type: "error",
          message: "Ongeldige deelnemer IDs",
        });
        await writer.close();
        return;
      }

      logger.debug("Selected deelnemers", {
        count: geselecteerdeDeelnemers.length,
        names: geselecteerdeDeelnemers.map((d) => d.name),
      });

      // Step 3: Generate conversation (25-70%)
      await sendEvent({
        type: "progress",
        percentage: 25,
        message: "Gesprek voorbereiden...",
      });

      const now = new Date();
      const startAt = now;
      const endAt = new Date(
        now.getTime() + GESPREK_DURATION_MINUTES * 60 * 1000
      );

      const gesprekBerichten = await genereerGesprekBerichten({
        onderwerp: gesaniteerdOnderwerp,
        deelnemers: geselecteerdeDeelnemers,
        startAt,
        endAt,
      });

      logger.info("Gesprek berichten generated", {
        count: gesprekBerichten.length,
      });

      await sendEvent({
        type: "progress",
        percentage: 70,
        message: "Gesprek voltooid...",
      });

      // Step 4: Generate compromis (75-85%)
      await sendEvent({
        type: "progress",
        percentage: 75,
        message: "Compromis formuleren...",
      });

      const compromis = await genereerCompromis({
        onderwerp: gesaniteerdOnderwerp,
        deelnemers: geselecteerdeDeelnemers,
        berichten: gesprekBerichten,
      });

      logger.info("Compromis generated", { length: compromis.length });

      await sendEvent({
        type: "progress",
        percentage: 85,
        message: "Compromis gereed...",
      });

      // Step 5: Save to database (90%)
      await sendEvent({
        type: "progress",
        percentage: 90,
        message: "Opslaan...",
      });

      const gesprek = await createGesprek({
        onderwerp: gesaniteerdOnderwerp,
        deelnemerIds,
        compromis,
        startAt,
        endAt,
      });

      await addBerichtenToGesprek(gesprek.id, gesprekBerichten);

      logger.info("Gesprek saved successfully", { gesprekId: gesprek.id });

      // Step 6: Complete (100%)
      await sendEvent({
        type: "complete",
        percentage: 100,
        message: "Klaar!",
        gesprekId: gesprek.id,
      });

      await writer.close();
    } catch (error) {
      logger.error("Error in gesprekken POST", error);
      await sendEvent({
        type: "error",
        message: "Er is een fout opgetreden bij het genereren van het gesprek",
      });
      await writer.close();
    }
  })();

  return new Response(stream.readable, {
    headers: {
      "Content-Type": "text/event-stream",
      "Cache-Control": "no-cache",
      Connection: "keep-alive",
    },
  });
}




