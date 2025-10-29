CREATE TABLE "berichten" (
	"id" serial PRIMARY KEY NOT NULL,
	"created_at" timestamp DEFAULT now() NOT NULL,
	"content" text NOT NULL,
	"gesprek_id" integer,
	"deelnemer_id" integer
);
--> statement-breakpoint
CREATE TABLE "deelnemers" (
	"id" serial PRIMARY KEY NOT NULL,
	"name" text NOT NULL,
	"image" text NOT NULL,
	"tone_of_voice" text NOT NULL,
	"partij" jsonb NOT NULL
);
--> statement-breakpoint
CREATE TABLE "gesprekken" (
	"id" serial PRIMARY KEY NOT NULL,
	"created_at" timestamp DEFAULT now() NOT NULL,
	"start_at" timestamp NOT NULL,
	"end_at" timestamp NOT NULL,
	"locatie" text NOT NULL,
	"onderwerp" text NOT NULL,
	"tone_of_voice" text NOT NULL
);
--> statement-breakpoint
CREATE TABLE "stemmen" (
	"id" serial PRIMARY KEY NOT NULL,
	"stemoptie_id" integer,
	"stemronde_id" integer,
	"device_id" text NOT NULL,
	"created_at" timestamp DEFAULT now() NOT NULL
);
--> statement-breakpoint
CREATE TABLE "stemopties" (
	"id" serial PRIMARY KEY NOT NULL,
	"stemronde_id" integer,
	"content" text NOT NULL,
	"created_at" timestamp DEFAULT now() NOT NULL
);
--> statement-breakpoint
CREATE TABLE "stemronde" (
	"id" serial PRIMARY KEY NOT NULL,
	"created_at" timestamp DEFAULT now() NOT NULL,
	"gesprek_id" integer,
	"status" text DEFAULT 'open' NOT NULL,
	"start_at" timestamp NOT NULL,
	"end_at" timestamp NOT NULL
);
--> statement-breakpoint
CREATE TABLE "suggesties" (
	"id" serial PRIMARY KEY NOT NULL,
	"device_id" text NOT NULL,
	"content" text NOT NULL,
	"used" boolean DEFAULT false NOT NULL,
	"created_at" timestamp DEFAULT now() NOT NULL
);
--> statement-breakpoint
ALTER TABLE "berichten" ADD CONSTRAINT "berichten_gesprek_id_gesprekken_id_fk" FOREIGN KEY ("gesprek_id") REFERENCES "public"."gesprekken"("id") ON DELETE no action ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "berichten" ADD CONSTRAINT "berichten_deelnemer_id_deelnemers_id_fk" FOREIGN KEY ("deelnemer_id") REFERENCES "public"."deelnemers"("id") ON DELETE no action ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "stemmen" ADD CONSTRAINT "stemmen_stemoptie_id_stemopties_id_fk" FOREIGN KEY ("stemoptie_id") REFERENCES "public"."stemopties"("id") ON DELETE no action ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "stemmen" ADD CONSTRAINT "stemmen_stemronde_id_stemronde_id_fk" FOREIGN KEY ("stemronde_id") REFERENCES "public"."stemronde"("id") ON DELETE no action ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "stemopties" ADD CONSTRAINT "stemopties_stemronde_id_stemronde_id_fk" FOREIGN KEY ("stemronde_id") REFERENCES "public"."stemronde"("id") ON DELETE no action ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "stemronde" ADD CONSTRAINT "stemronde_gesprek_id_gesprekken_id_fk" FOREIGN KEY ("gesprek_id") REFERENCES "public"."gesprekken"("id") ON DELETE no action ON UPDATE no action;