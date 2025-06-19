import dotenv from "dotenv";
dotenv.config();

import { neon } from "@netlify/neon";
import { drizzle } from "drizzle-orm/neon-http";

import * as schema from "../db/schema";

const connectionString = process.env.DATABASE_URL;

if (!connectionString) {
  throw new Error("DATABASE_URL is not defined in environment variables.");
}

export const db = drizzle(neon(connectionString), { schema });

console.log("Banco conectado com sucesso!");
