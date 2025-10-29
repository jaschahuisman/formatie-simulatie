import { Deelnemer } from "@/data/deelnemers";
import { model } from "@/lib/ai";
import { generateObject } from "ai";
import { createLogger } from "@/lib/logger";
import { GeneratedMessage } from "./genereer-gesprek-berichten";
import { compromisSchema } from "@/lib/ai/schema";

const logger = createLogger("genereer-compromis");

/**
 * Genereer een compromis/conclusie op basis van het gesprek.
 * @param opties - Opties voor het genereren van het compromis.
 * @returns Het gegenereerde compromis als JSON string.
 */
export async function genereerCompromis(opties: {
  onderwerp: string;
  deelnemers: Deelnemer[];
  berichten: GeneratedMessage[];
}): Promise<string> {
  try {
    logger.info("Generating compromis", { onderwerp: opties.onderwerp });

    const conversationText = opties.berichten
      .map((msg) => `${msg.deelnemerName}: ${msg.message}`)
      .join("\n");

    const deelnemersInfo = opties.deelnemers
      .map(
        (d) =>
          `- ${d.name} (${d.partij.name}, ${d.partij.zetels} zetels)`
      )
      .join("\n");

    const systemPrompt = `Je bent een expert in het samenvatten van politieke onderhandelingen en het formuleren van compromissen.
Je taak is om op basis van een politiek gesprek een helder, concreet compromis of conclusie te formuleren.

De output moet:
- "type" zijn "agreement" als ALLE deelnemers het volledig eens zijn, anders "compromis"
- "samenvatting" moet 1 korte, krachtige zin zijn (max 20 woorden)
- "stappen" moet 3-5 concrete, korte actiepunten bevatten (elk max 15 woorden)
- Helder en begrijpelijk zijn voor het grote publiek
- Realistisch zijn gegeven de standpunten van de deelnemers`;

    const userPrompt = `# Onderwerp
${opties.onderwerp}

# Deelnemers
${deelnemersInfo}

# Gesprek
${conversationText}

Analyseer dit gesprek en geef een gestructureerd compromis/akkoord terug.`;

    const response = await generateObject({
      model,
      schema: compromisSchema,
      system: systemPrompt,
      prompt: userPrompt,
    });

    const compromis = JSON.stringify(response.object);
    
    logger.info("Compromis generated successfully", {
      type: response.object.type,
      stappen: response.object.stappen.length,
    });
    
    return compromis;
  } catch (error) {
    logger.error("Error generating compromis", error);
    throw error;
  }
}

