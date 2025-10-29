ALTER TABLE "deelnemers" DISABLE ROW LEVEL SECURITY;--> statement-breakpoint
ALTER TABLE "stemmen" DISABLE ROW LEVEL SECURITY;--> statement-breakpoint
ALTER TABLE "stemopties" DISABLE ROW LEVEL SECURITY;--> statement-breakpoint
ALTER TABLE "stemronde" DISABLE ROW LEVEL SECURITY;--> statement-breakpoint
ALTER TABLE "suggesties" DISABLE ROW LEVEL SECURITY;--> statement-breakpoint
DROP TABLE "deelnemers" CASCADE;--> statement-breakpoint
DROP TABLE "stemmen" CASCADE;--> statement-breakpoint
DROP TABLE "stemopties" CASCADE;--> statement-breakpoint
DROP TABLE "stemronde" CASCADE;--> statement-breakpoint
DROP TABLE "suggesties" CASCADE;--> statement-breakpoint
ALTER TABLE "berichten" DROP CONSTRAINT "berichten_deelnemer_id_deelnemers_id_fk";
--> statement-breakpoint
ALTER TABLE "berichten" ALTER COLUMN "deelnemer_id" SET NOT NULL;--> statement-breakpoint
ALTER TABLE "gesprekken" ADD COLUMN "deelnemer_ids" jsonb NOT NULL;--> statement-breakpoint
ALTER TABLE "gesprekken" ADD COLUMN "compromis" text NOT NULL;--> statement-breakpoint
ALTER TABLE "gesprekken" DROP COLUMN "locatie";--> statement-breakpoint
ALTER TABLE "gesprekken" DROP COLUMN "tone_of_voice";