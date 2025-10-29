-- Drop voting system tables
DROP TABLE IF EXISTS "stemmen";
DROP TABLE IF EXISTS "stemopties";
DROP TABLE IF EXISTS "stemronde";
DROP TABLE IF EXISTS "suggesties";

-- Modify gesprekken table
ALTER TABLE "gesprekken" DROP COLUMN IF EXISTS "locatie";
ALTER TABLE "gesprekken" DROP COLUMN IF EXISTS "tone_of_voice";
ALTER TABLE "gesprekken" ADD COLUMN "deelnemer_ids" jsonb NOT NULL DEFAULT '[]'::jsonb;
ALTER TABLE "gesprekken" ADD COLUMN "compromis" text NOT NULL DEFAULT '';




