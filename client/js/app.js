document.addEventListener("DOMContentLoaded", () => {

    const API_URL = 'http://localhost:3000';
    const openBtn = document.getElementById("buttonAdd");
    const closeBtn = document.querySelector(".closeBtn");
    const modal = document.getElementById("addTaskModal");
    const taskForm = document.getElementById("taskForm");
    const listContainer = document.querySelector(".listContentContainer");

    const carregarTarefas = async () => {
        try {
            const response = await fetch(`${API_URL}/tarefas`);
            const tarefas = await response.json();

            listContainer.innerHTML = '';

            tarefas.forEach(tarefa => {
                const li = document.createElement('li');
                li.className = 'taskItem';
                li.dataset.id = tarefa.id;
                
                const dataFormatada = new Date(tarefa.data_entrega).toLocaleDateString('pt-BR', {timeZone: 'UTC'});

                li.innerHTML = `
                    <span class="taskTitle">${tarefa.titulo}</span>
                    <span class="taskDescription">${tarefa.descricao}</span>
                    <span class="taskWhen">${dataFormatada}</span>
                    <span class="taskPriority">${tarefa.prioridade}</span>
                    <span class="taskStatus">${tarefa.status}</span>
                    <span class="taskActions">
                        <button class="deleteBtn"><img src="assets/img/trashIcon.png" alt="Remover"></button>
                        <button class="doneBtn"><img src="assets/img/doneIcon.png" alt="Finalizar"></button>
                    </span>
                `;
                listContainer.appendChild(li);
            });
        } catch (error) {
            console.error('Erro ao carregar tarefas:', error);
        }
    };

    const adicionarTarefa = async (event) => {
        event.preventDefault();

        const novaTarefa = {
            titulo: document.getElementById('taskTitle').value,
            descricao: document.getElementById('taskDescription').value,
            data_entrega: document.getElementById('taskWhen').value.split('/').reverse().join('-'),
            prioridade: document.getElementById('taskPriority').value
        };

        try {
            await fetch(`${API_URL}/tarefas`, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(novaTarefa)
            });
            fecharModal();
            carregarTarefas();
        } catch (error) {
            console.error('Erro ao adicionar tarefa:', error);
        }
    };

    const handleAcoesTarefa = async (event) => {
        const target = event.target;
        const deleteBtn = target.closest('.deleteBtn');
        const doneBtn = target.closest('.doneBtn');

        if (!deleteBtn && !doneBtn) return;

        const taskItem = target.closest('.taskItem');
        const taskId = taskItem.dataset.id;

        try {
            if (deleteBtn) {
                await fetch(`${API_URL}/tarefas/${taskId}`, { method: 'DELETE' });
            }
            if (doneBtn) {
                await fetch(`${API_URL}/tarefas/${taskId}/status`, {
                    method: 'PUT',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify({ status: 'Finalizada' })
                });
            }
            carregarTarefas();
        } catch (error) {
            console.error('Erro ao executar ação:', error);
        }
    };

    const fecharModal = () => {
        modal.style.display = "none";
        taskForm.reset();
    };

    openBtn.onclick = () => modal.style.display = "block";
    closeBtn.onclick = fecharModal;
    taskForm.addEventListener('submit', adicionarTarefa);
    listContainer.addEventListener('click', handleAcoesTarefa);

    const inputData = document.getElementById("taskWhen");
    if (inputData) {
        IMask(inputData, { mask: '00/00/0000' });
    }

    carregarTarefas();
});