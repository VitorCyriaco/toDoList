const express = require('express');
const router = express.Router();
const tarefaController = require('../controllers/tarefasController');

router.get('/tarefas', tarefaController.listarTarefas);
router.post('/tarefas', tarefaController.criarTarefa);
router.put('/tarefas/:id', tarefaController.atualizarTarefa);
router.delete('/tarefas/:id', tarefaController.deletarTarefa);
router.put('/tarefas/:id/status', tarefaController.atualizarStatusTarefa);

module.exports = router;