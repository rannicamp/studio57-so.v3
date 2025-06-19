import { db } from "../db";
import { funcionarios } from "../db/schema";
async function testConnection() {
    try {
        const result = await db.select().from(funcionarios).limit(1);
        console.log("Query result:", result);
    }
    catch (error) {
        console.error("Erro ao conectar ou consultar o banco:", error);
    }
}
testConnection();
