import { drizzle } from "drizzle-orm/postgres-js";
import * as schema from "./schema";

if (!process.env.DATABASE_URL) {
  throw new Error("DATABASE_URL environment variable is required");
}

// Create drizzle instance
export const db = drizzle(process.env.DATABASE_URL!, { schema });

// Export types and schemas
export { schema };
export type Database = typeof db;
