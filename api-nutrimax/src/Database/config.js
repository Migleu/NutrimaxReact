import mysql from "mysql2/promise";

async function connectionDB() {
    try {
        const connection = await mysql.createConnection({
            host: "localhost",
            database: "bdnutrimax",
            user: "root",
            password: "devisate",
        });

        return connection;
    } catch (error) {
        console.error("Error in connect with database:", error);
        throw error;
    }
}

export default connectionDB;