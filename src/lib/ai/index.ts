import { google } from "@ai-sdk/google";

// Default model voor standaard gebruik
export const model = google("gemini-2.0-flash");

// Model configurations voor variatie in gesprekken
// Alle gebruiken gemini-2.0-flash met verschillende settings
export const MODEL_CONFIGS = [
  {
    name: "gemini-2.0-flash-balanced",
    model: google("gemini-2.0-flash"),
    settings: {
      temperature: 0.9,
      topP: 0.95,
      frequencyPenalty: 0.3,
    },
    description: "Balanced: goede mix van creativiteit en consistentie",
  },
  {
    name: "gemini-2.0-flash-creative",
    model: google("gemini-2.0-flash"),
    settings: {
      temperature: 1.2,
      topP: 0.98,
      frequencyPenalty: 0.5,
    },
    description: "Creative: meer variatie en onverwachte wendingen",
  },
  {
    name: "gemini-2.0-flash-focused",
    model: google("gemini-2.0-flash"),
    settings: {
      temperature: 0.7,
      topP: 0.9,
      frequencyPenalty: 0.4,
    },
    description: "Focused: meer voorspelbaar en consistent",
  },
  {
    name: "gemini-2.0-flash-dynamic",
    model: google("gemini-2.0-flash"),
    settings: {
      temperature: 1.0,
      topP: 0.95,
      frequencyPenalty: 0.6,
    },
    description: "Dynamic: hoge frequency penalty voor minder herhaling",
  },
] as const;

/**
 * Selecteer een random model configuratie voor variatie
 */
export function getRandomModelConfig() {
  const randomIndex = Math.floor(Math.random() * MODEL_CONFIGS.length);
  return MODEL_CONFIGS[randomIndex];
}
