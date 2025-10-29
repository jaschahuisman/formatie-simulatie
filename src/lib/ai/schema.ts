import { z } from "zod";

/**
 * Schema voor compromis/akkoord output
 */
export const compromisSchema = z.object({
  type: z.enum(["agreement", "compromis"]).describe(
    "agreement als ALLE deelnemers het volledig eens zijn, anders compromis"
  ),
  samenvatting: z.string().describe(
    "Een korte, krachtige samenvatting in max 20 woorden"
  ),
  stappen: z.array(z.string()).min(3).max(5).describe(
    "3-5 concrete, korte actiepunten (elk max 15 woorden)"
  ),
});

export type Compromis = z.infer<typeof compromisSchema>;


