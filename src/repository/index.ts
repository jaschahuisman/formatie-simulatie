import { db } from "@/lib/db";
import { desc, eq } from "drizzle-orm";
import {
  gesprekkenTable,
  berichtenTable,
} from "@/lib/db/schema";
import { deelnemers } from "@/data/deelnemers";
import { GeneratedMessage } from "@/lib/live-formatie/genereer-gesprek-berichten";
import { createLogger } from "@/lib/logger";

const logger = createLogger("repository");


/**
 * Maak een nieuw gesprek aan.
 * @param parameters Parameters voor het gesprek.
 * @returns Gesprek of null als het gesprek niet kan worden aangemaakt.
 */
export async function createGesprek(parameters: {
  onderwerp: string;
  deelnemerIds: number[];
  compromis: string;
  startAt: Date;
  endAt: Date;
  deviceId?: string;
}) {
  try {
    logger.debug("Creating gesprek", { onderwerp: parameters.onderwerp });
    const gesprek = await db
      .insert(gesprekkenTable)
      .values({
        startAt: parameters.startAt,
        endAt: parameters.endAt,
        onderwerp: parameters.onderwerp,
        deelnemerIds: parameters.deelnemerIds,
        compromis: parameters.compromis,
        deviceId: parameters.deviceId,
      })
      .returning()
      .then((result) => result[0]);

    logger.info("Gesprek created successfully", { gesprekId: gesprek.id });
    return gesprek;
  } catch (error) {
    logger.error("Error creating gesprek", error);
    throw error;
  }
}

/**
 * Voeg berichten toe aan een gesprek.
 * @param gesprekId Id van het gesprek.
 * @param berichten Berichten die toegevoegd worden.
 * @returns De toegevoegde berichten.
 */
export async function addBerichtenToGesprek(
  gesprekId: number,
  berichten: (GeneratedMessage & { timestamp: Date })[]
) {
  try {
    logger.debug("Adding berichten to gesprek", { gesprekId, berichtenCount: berichten.length });
    const toegevoegdeBerichten = await db.transaction(async (tx) => {
      return await tx
        .insert(berichtenTable)
        .values(
          berichten.map((bericht) => ({
            gesprekId,
            content: bericht.message,
            deelnemerId: bericht.deelnemerId,
            timestamp: bericht.timestamp,
          }))
        )
        .returning();
    });

    logger.info("Berichten added successfully", { gesprekId, count: toegevoegdeBerichten.length });
    return toegevoegdeBerichten;
  } catch (error) {
    logger.error("Error adding berichten to gesprek", error);
    throw error;
  }
}

/**
 * Haal een gesprek op op ID.
 * @param id Id van het gesprek.
 * @returns Gesprek met berichten or null als het gesprek niet bestaat.
 */
export async function getGesprekById(id: number) {
  try {
    logger.debug("Fetching gesprek by id", { id });
    const gesprek = await db.query.gesprekkenTable.findFirst({
      where: eq(gesprekkenTable.id, id),
      with: {
        berichten: true,
      },
    });

    if (!gesprek) {
      logger.debug("Gesprek not found");
      return null;
    }

    // Enrich berichten with deelnemer data from static source
    const berichtenMetDeelnemers = gesprek.berichten.map((bericht) => ({
      ...bericht,
      deelnemer: deelnemers.find((d) => d.id === bericht.deelnemerId) || null,
    }));

    logger.debug("Gesprek fetched", { found: true });
    return {
      ...gesprek,
      berichten: berichtenMetDeelnemers,
    };
  } catch (error) {
    logger.error("Error fetching gesprek by id", error);
    throw error;
  }
}

/**
 * Haal alle deelnemers op.
 * @returns Alle deelnemers.
 */
export function getAllDeelnemers() {
  logger.debug("Fetching all deelnemers from static data");
  return deelnemers;
}
