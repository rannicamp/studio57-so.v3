import dotenv from "dotenv";
dotenv.config(); // Carrega as variáveis de ambiente do arquivo .env

import { neon } from "@netlify/neon";
import { drizzle } from "drizzle-orm/neon-http";

import * as schema from "../db/schema"; // Certifique-se de que o caminho para o seu schema está correto

// Use NETLIFY_DATABASE_URL para consistência com as expectativas do Netlify/Neon
const connectionString = process.env.NETLIFY_DATABASE_URL; 

if (!connectionString) {
  // A mensagem de erro agora reflete o nome da variável esperada
  throw new Error("NETLIFY_DATABASE_URL is not defined in environment variables.");
}

// Inicializa o cliente Neon com a string de conexão
const sql = neon(connectionString);

// Inicializa o Drizzle ORM com o cliente Neon e o schema do banco de dados
export const db = drizzle(sql, { schema });

console.log("Banco conectado com sucesso!");

// --- O RESTO DO SEU CÓDIGO DA APLICAÇÃO VAI AQUI ---
// (Adicione o restante do seu código que usa 'db' abaixo desta linha)