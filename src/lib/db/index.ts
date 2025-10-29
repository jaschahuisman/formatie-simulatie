import dotenv from "dotenv";
import { drizzle } from "drizzle-orm/node-postgres";
import * as schema from "@/lib/db/schema";
import { createLogger } from "@/lib/logger";

const logger = createLogger("db");

dotenv.config({
  path: ".env.local",
});

if (!process.env.DATABASE_URL) {
  logger.error("DATABASE_URL is not defined in environment variables");
  throw new Error("DATABASE_URL is not defined");
}

logger.info("Initializing database connection");
export const db = drizzle(process.env.DATABASE_URL, { schema });
