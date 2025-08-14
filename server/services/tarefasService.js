const db = require('../config/db');

/**
 * @param {string} query
 * @param {Array} params
 * @returns {Promise<Array>}
 */
const dbAll = (query, params = []) => {
    return new Promise((resolve, reject) => {
        db.all(query, params, (err, rows) => {
            if (err) {
                console.error("Erro na query (dbAll):", err.message);
                reject(err);
            } else {
                resolve(rows);
            }
        });
    });
};

/**
 * @param {string} query
 * @param {Array} params
 * @returns {Promise<object>}
 */
const dbRun = (query, params = []) => {
    return new Promise((resolve, reject) => {
        db.run(query, params, function (err) {
            if (err) {
                console.error("Erro na query (dbRun):", err.message);
                reject(err);
            } else {
                resolve({ lastID: this.lastID, changes: this.changes });
            }
        });
    });
};

async function listarQuery() {
    return await dbAll('SELECT * FROM tarefas');
}

async function criarQuery({ titulo, descricao, prioridade, data_entrega }) {
    const query = 'INSERT INTO tarefas (titulo, descricao, status, prioridade, data_entrega) VALUES (?, ?, ?, ?, ?)';
    const params = [titulo, descricao, 'A Fazer', prioridade, data_entrega];
    const result = await dbRun(query, params);
    return { id: result.lastID };
}

async function atualizarQuery(id, { titulo, descricao, status, prioridade, data_entrega }) {
    const query = 'UPDATE tarefas SET titulo = ?, descricao = ?, status = ?, prioridade = ?, data_entrega = ? WHERE id = ?';
    const params = [titulo, descricao, status, prioridade, data_entrega, id];
    const result = await dbRun(query, params);
    return result.changes;
}

async function atualizarStatusQuery(id, status) {
    const query = 'UPDATE tarefas SET status = ? WHERE id = ?';
    const result = await dbRun(query, [status, id]);
    return result.changes;
}

async function deletarQuery(id) {
    const query = 'DELETE FROM tarefas WHERE id = ?';
    const result = await dbRun(query, [id]);
    return result.changes;
}

module.exports = {
    listarQuery,
    criarQuery,
    atualizarQuery,
    deletarQuery,
    atualizarStatusQuery
};