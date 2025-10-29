import { generateText } from "ai";
import { model } from "@/lib/ai";
import { createLogger } from "@/lib/logger";

const MAX_ONDERWERP_LENGTH = 100;
const logger = createLogger("genereer-titel");

/**
 * Check of de input veilig en geschikt is voor een politiek gesprek
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
      prompt: `Je bent een content moderator. Beoordeel of deze input geschikt is voor een serieus politiek gesprek.

Input:
"${onderwerp}"

Beoordeel op:
- NSFW content (seksualiteit, geweld, grof taalgebruik)
- Haatdragende uitspraken
- Spam of zinloze tekst
- Discriminerende inhoud

Geef ALLEEN één van deze twee antwoorden:
1. "SAFE" - als de input geschikt is voor een politiek gesprek
2. "UNSAFE: [reden]" - als de input niet geschikt is, met een korte uitleg

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

