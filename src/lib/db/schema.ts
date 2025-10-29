import {
  boolean,
  integer,
  jsonb,
  pgTable,
  serial,
  text,
  timestamp,
} from "drizzle-orm/pg-core";
import { relations } from "drizzle-orm";

// Gesprekken table
export const gesprekkenTable = pgTable("gesprekken", {
  id: serial("id").primaryKey(),
  createdAt: timestamp("created_at").notNull().defaultNow(),
  startAt: timestamp("start_at").notNull(),
  endAt: timestamp("end_at").notNull(),
  onderwerp: text("onderwerp").notNull(),
  deelnemerIds: jsonb("deelnemer_ids").notNull().$type<number[]>(),
  compromis: text("compromis").notNull(),
});

export type Gesprek = typeof gesprekkenTable.$inferSelect;

// Berichten table
export const berichtenTable = pgTable("berichten", {
  id: serial("id").primaryKey(),
  createdAt: timestamp("created_at").notNull().defaultNow(),
  timestamp: timestamp("timestamp").notNull(), // The actual conversation timestamp
  content: text("content").notNull(),
  gesprekId: integer("gesprek_id").references(() => gesprekkenTable.id),
  deelnemerId: integer("deelnemer_id").notNull(),
});

export type Bericht = typeof berichtenTable.$inferSelect;

// Gesprekken relations
export const gesprekkenRelations = relations(gesprekkenTable, ({ many }) => ({
  berichten: many(berichtenTable),
}));

// Berichten relations
export const berichtenRelations = relations(berichtenTable, ({ one }) => ({
  gesprek: one(gesprekkenTable, {
    fields: [berichtenTable.gesprekId],
    references: [gesprekkenTable.id],
  }),
}));
