const sqlite3 = require('sqlite3').verbose();

const DB_SOURCE = "database.db";

const db = new sqlite3.Database(DB_SOURCE, (err) => {
    if (err) {
        console.error(err.message);
        throw err;
    } else {
        console.log('Conectado ao banco de dados.');
        db.run(`CREATE TABLE IF NOT EXISTS tarefas (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            titulo TEXT NOT NULL,
            descricao TEXT,
            status TEXT NOT NULL,
            prioridade TEXT NOT NULL,
            data_entrega TEXT NOT NULL
        )`, (err) => {
            if (err) {
                console.error("Erro ao criar a tabela:", err.message);
            }
        });
    }
});

module.exports = db;