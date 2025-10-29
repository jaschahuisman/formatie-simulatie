-- Drop foreign key constraint from berichten table
ALTER TABLE "berichten" DROP CONSTRAINT IF EXISTS "berichten_deelnemer_id_deelnemers_id_fk";

-- Drop the deelnemers table
DROP TABLE IF EXISTS "deelnemers";



