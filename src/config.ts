export const GESPREK_DURATION_MINUTES = 5;
export const GESPREK_MESSAGES_PER_PERSON = 4; // Base aantal berichten per persoon
export const GESPREK_MIN_MESSAGES = 20; // Minimum aantal berichten voor elk gesprek
export const GESPREK_TURNS_PER_BATCH = 2; // 2-3 turns per batch (elk turn = 1-3 berichten)
export const MIN_DEELNEMERS_FOR_GESPREK = 2;
export const MAX_DEELNEMERS_FOR_GESPREK = 6;
export const MAJORITY_ZETELS = 75;

/**
 * Calculate target message count based on number of participants
 * Ensures minimum 20 messages, scales up with more participants
 */
export function calculateTargetMessageCount(participantCount: number): number {
  return Math.max(GESPREK_MIN_MESSAGES, GESPREK_MESSAGES_PER_PERSON * participantCount);
}

export const QUICK_TOPIC_OPTIONS = [
  "Klimaat en duurzaamheid",
  "Migratie en asiel",
  "Zorg en ouderenzorg",
  "Economie en werkgelegenheid",
  "Onderwijs en studiefinanciering",
  "Woningmarkt en bouwen",
  "Veiligheid en politie",
  "Europa en buitenlandbeleid",
];
