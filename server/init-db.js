const db = require('./config/db');

const createTableSql = `
    CREATE TABLE IF NOT EXISTS tarefas (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        titulo TEXT,
        descricao TEXT,
        status TEXT DEFAULT 'Pendente',
        prioridade TEXT DEFAULT 'Média',
        data_entrega TEXT
    );
`;

db.serialize(() => {
    db.exec(createTableSql, (err) => {
        if (err) {
            console.error("Erro ao criar a tabela 'tarefas':", err.message);
        } else {
            console.log("Tabela 'tarefas' criada ou já existente com sucesso!");
        }
    });
});

db.close((err) => {
    if (err) {
        return console.error(err.message);
    }
    console.log('Conexão com o banco de dados fechada.');
});