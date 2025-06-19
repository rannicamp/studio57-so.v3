// Importa o cliente Neon. Note que para um ambiente local de desenvolvimento,
// você pode usar '@neondatabase/serverless' ou '@netlify/neon'.
// Se você está desenvolvendo localmente e usando `tsx` ou `node`,
// '@neondatabase/serverless' é geralmente o mais adequado.
// Para funções Netlify, '@netlify/neon' é o ideal.
// Vamos usar `@neondatabase/serverless` aqui para o ambiente geral de DB.
import { neon } from "@neondatabase/serverless";
import { drizzle } from "drizzle-orm/neon-http";
import * as schema from "./schema"; // Certifique-se de que o caminho para o seu schema está correto

// Para que a variável de ambiente seja carregada corretamente em ambiente de desenvolvimento,
// é comum usar uma biblioteca como `dotenv`.
// No Netlify, as variáveis de ambiente são configuradas diretamente no painel.
// Você pode precisar instalar 'dotenv' se for testar localmente com arquivos .env
// npm install dotenv
import "dotenv/config"; // Importa para carregar as variáveis de ambiente do .env

// A string de conexão é lida de uma variável de ambiente.
// Recomenda-se usar process.env.DATABASE_URL ou NETLIFY_DATABASE_URL para Neon.
// Vamos usar NETLIFY_DATABASE_URL para consistência com o Netlify.
const connectionString = process.env.NETLIFY_DATABASE_URL;

// Verifica se a string de conexão existe antes de tentar se conectar
if (!connectionString) {
  throw new Error(
    "NETLIFY_DATABASE_URL environment variable is not set. Please set it in your .env file or Netlify settings."
  );
}

// Inicializa o cliente Neon com a string de conexão
const sql = neon(connectionString);

// Inicializa o Drizzle ORM com o cliente Neon e o schema
export const db = drizzle(sql, { schema });