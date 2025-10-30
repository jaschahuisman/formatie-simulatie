import { generateText } from "ai";
import { model } from "@/lib/ai";
import { createLogger } from "@/lib/logger";

const MAX_ONDERWERP_LENGTH = 100;
const logger = createLogger("genereer-titel");

/**
 * Check of de input gepast is om over te discussiëren
 * Zwart-wit check: NSFW, haatspraak, discriminatie = geblokkeerd
 * Controversiële maar legitieme onderwerpen = toegestaan
 */
export async function checkContentSafety(onderwerp: string): Promise<{
  safe: boolean;
  reason?: string;
}> {
  logger.info("Checking content safety", {
    onderwerpLength: onderwerp.length,
  });

  try {
    const { text } = await generateText({
      model,
      prompt: `Je bent een content moderator. Beoordeel of deze input gepast is om over te discussiëren.

Input:
"${onderwerp}"

Check ZWART-WIT op deze criteria (direct blokkeren):
- NSFW content (explicite seksualiteit, extreme geweld)
- Haatdragende uitspraken
- Discriminerende inhoud (racisme, homofobie, etc.)
- Spam of complete onzin

LET OP:
- Controversiële maar legitieme onderwerpen zijn SAFE (bijv. "illegalen Nederland uit", "abortus", "euthanasie")
- Politieke standpunten, ook extreme, zijn SAFE zolang ze niet haatdragend zijn
- Het hoeft geen "serieus politiek onderwerp" te zijn - ook ludieke onderwerpen zijn toegestaan

Geef ALLEEN één van deze twee antwoorden:
1. "SAFE" - als de input gepast is om over te discussiëren
2. "UNSAFE: [reden]" - als de input ongepast is (korte uitleg)

Antwoord:`,
    });

    const response = text.trim();

    if (response.startsWith("UNSAFE:")) {
      const reason = response.replace("UNSAFE:", "").trim();
      logger.warn("Content deemed unsafe", { reason });
      return { safe: false, reason };
    }

    logger.info("Content is safe");
    return { safe: true };
  } catch (error) {
    logger.error("Error checking content safety, allowing by default", error);
    // Bij een error, sta het toe (fail-open)
    return { safe: true };
  }
}

/**
 * Genereer ALTIJD een korte, neutrale titel voor het onderwerp
 * Dit voorkomt dat NSFW content verbatim overgenomen wordt
 */
export async function genereerTitel(onderwerp: string): Promise<string> {
  logger.info("Generating sanitized title", {
    originalLength: onderwerp.length,
    maxLength: MAX_ONDERWERP_LENGTH,
  });

  try {
    const { text } = await generateText({
      model,
      prompt: `Gegeven deze input voor een politiek gesprek, genereer een korte, neutrale en professionele titel van maximaal ${MAX_ONDERWERP_LENGTH} karakters.

Input:
${onderwerp}

Regels:
- Maximaal ${MAX_ONDERWERP_LENGTH} karakters
- Vat de kern van het onderwerp samen op een neutrale manier
- Maak het geschikt voor een formeel politiek gesprek
- Sanitize eventuele ongepaste taal naar neutrale termen
- Geen aanhalingstekens in de titel
- Direct de titel geven, geen uitleg of context

Titel:`,
    });

    const titel = text.trim().replace(/^["']|["']$/g, ""); // Verwijder quotes aan begin/eind

    // Als de gegenereerde titel te lang is, truncate het
    if (titel.length > MAX_ONDERWERP_LENGTH) {
      logger.warn("Generated title too long, truncating", {
        generatedLength: titel.length,
        truncatedLength: MAX_ONDERWERP_LENGTH,
      });
      return titel.substring(0, MAX_ONDERWERP_LENGTH - 3) + "...";
    }

    logger.info("Title generated successfully", {
      originalLength: onderwerp.length,
      generatedLength: titel.length,
      titel,
    });

    return titel;
  } catch (error) {
    logger.error("Error generating title, using truncated version", error);
    // Fallback: truncate het originele onderwerp
    return onderwerp.substring(0, MAX_ONDERWERP_LENGTH - 3) + "...";
  }
}

