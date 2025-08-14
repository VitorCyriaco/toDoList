const tarefaServices = require('../services/tarefasService');

async function listarTarefas(req, res) {
    try {
        const tarefas = await tarefaServices.listarQuery();
        res.status(200).json(tarefas);
    } catch (erro) {
        console.error("Controller Error:", erro);
        res.status(500).json({ erro: 'Erro ao buscar tarefas' });
    }
}

async function criarTarefa(req, res) {
    try {
        if (!req.body.titulo) {
            return res.status(400).json({ erro: 'O campo "titulo" é obrigatório.' });
        }
        const novaTarefa = await tarefaServices.criarQuery(req.body);
        res.status(201).json({ mensagem: "Tarefa criada com sucesso!", ...novaTarefa });
    } catch (erro) {
        console.error("Controller Error:", erro);
        res.status(500).json({ erro: 'Erro ao criar tarefa' });
    }
}

async function atualizarTarefa(req, res) {
    try {
        const affectedRows = await tarefaServices.atualizarQuery(req.params.id, req.body);
        if (affectedRows === 0) {
            res.status(404).json({ erro: 'Tarefa não encontrada' });
        } else {
            res.status(200).json({ mensagem: 'Tarefa atualizada com sucesso' });
        }
    } catch (erro) {
        console.error("Controller Error:", erro);
        res.status(500).json({ erro: 'Erro ao atualizar tarefa' });
    }
}

async function atualizarStatusTarefa(req, res) {
    try {
        const { id } = req.params;
        const { status } = req.body;
        if (!status) {
            return res.status(400).json({ erro: 'O campo "status" é obrigatório.' });
        }
        const affectedRows = await tarefaServices.atualizarStatusQuery(id, status);
        if (affectedRows === 0) {
            res.status(404).json({ erro: 'Tarefa não encontrada' });
        } else {
            res.status(200).json({ mensagem: 'Status da tarefa atualizado com sucesso' });
        }
    } catch (erro) {
        console.error("Controller Error:", erro);
        res.status(500).json({ erro: 'Erro ao atualizar o status da tarefa' });
    }
}

async function deletarTarefa(req, res) {
    try {
        const affectedRows = await tarefaServices.deletarQuery(req.params.id);
        if (affectedRows === 0) {
            res.status(404).json({ erro: 'Tarefa não encontrada' });
        } else {
            res.status(200).json({ mensagem: 'Tarefa deletada com sucesso' });
        }
    } catch (erro) {
        console.error("Controller Error:", erro);
        res.status(500).json({ erro: 'Erro ao deletar tarefa' });
    }
}

module.exports = {
    listarTarefas,
    criarTarefa,
    atualizarTarefa,
    deletarTarefa,
    atualizarStatusTarefa
};