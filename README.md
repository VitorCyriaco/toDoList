# To-Do List

Uma aplicação full-stack simples e eficiente para gerenciar uma lista de tarefas (To-Do List), construída com um frontend em HTML/CSS/JS e um backend com Node.js, Express e SQLite.

---

## 📖 Sobre o Projeto

Este projeto consiste em uma aplicação completa, dividida em:

-   **Backend (Server)**: Uma API RESTful que fornece endpoints para realizar operações CRUD (Criar, Ler, Atualizar, Deletar) em uma lista de tarefas. A API foi desenvolvida com uma arquitetura em camadas (Rotas, Controladores e Serviços) para garantir organização e manutenibilidade.
-   **Frontend (Client)**: Uma interface de usuário interativa que consome a API do backend, permitindo a visualização e manipulação das tarefas de forma dinâmica no navegador.

Os dados das tarefas são persistidos em um banco de dados leve e local (SQLite) gerenciado pelo backend.

---

## ✨ Funcionalidades

-   **Listar todas as tarefas**: Obtém a lista completa de tarefas.
-   **Criar uma nova tarefa**: Adiciona uma nova tarefa ao banco de dados.
-   **Atualizar uma tarefa existente**: Modifica todas as informações de uma tarefa.
-   **Atualizar o status de uma tarefa**: Altera especificamente o status de uma tarefa (ex: "A Fazer" para "Finalizada").
-   **Deletar uma tarefa**: Remove uma tarefa do banco de dados.

---

## 🛠️ Tecnologias Utilizadas

-   **Frontend (Client)**:
    -   HTML5
    -   CSS3
    -   JavaScript

-   **Backend (Server)**:
    -   [Node.js](https://nodejs.org/) - Ambiente de execução JavaScript.
    -   [Express.js](https://expressjs.com/pt-br/) - Framework para construção da API.
    -   [SQLite3](https://www.sqlite.org/index.html) - Banco de dados SQL leve e baseado em arquivo.
    -   [CORS](https://www.npmjs.com/package/cors) - Middleware para permitir requisições de diferentes origens.

-   **Ambiente de Desenvolvimento**:
    -   [Nodemon](https://www.npmjs.com/package/nodemon) (Recomendado) - Para reiniciar o servidor automaticamente durante o desenvolvimento.

---

## 🚀 Como Executar o Projeto

Siga os passos abaixo para configurar e rodar a aplicação completa em seu ambiente local.

### Pré-requisitos

-   **Node.js**: Certifique-se de ter o Node.js instalado (versão 14.x ou superior). Você pode baixá-lo [aqui](https://nodejs.org/).
-   **NPM** ou **Yarn**: Gerenciador de pacotes (geralmente vem com o Node.js).

### Instalação

1.  **Clone o repositório:**
    ```sh
    git clone [https://github.com/vitorcyriaco/toDoList.git](https://github.com/vitorcyriaco/toDoList.git)
    ```

2.  **Navegue até a pasta do projeto:**
    ```sh
    cd toDoList
    ```

3.  **Instale as dependências do Backend:**
    ```sh
    cd server
    npm install
    cd ..
    ```

### Execução

Para rodar a aplicação, você precisará iniciar o backend e o frontend separadamente.

#### 1. Backend (Servidor)

-   Navegue até a pasta do servidor e inicie-o:
    ```sh
    cd server
    npm start
    ```
-   **(Opcional) Para desenvolvimento com reinicialização automática:**
    ```sh
    nodemon app.js
    ```
-   O servidor da API estará rodando em `http://localhost:3000`.

#### 2. Frontend (Cliente)

-   Abra o arquivo `client/index.html` diretamente no seu navegador de preferência (Google Chrome, Firefox, etc.).
-   A aplicação cliente será carregada e se comunicará com o servidor que você iniciou no passo anterior.

---

## API Endpoints

A API (backend) fornece os seguintes endpoints:

| Método   | Rota                  | Descrição                           | Corpo da Requisição (Exemplo)                                                                              |
| :------- | :-------------------- | :---------------------------------- | :--------------------------------------------------------------------------------------------------------- |
| `GET`    | `/tarefas`            | Lista todas as tarefas.             | N/A                                                                                                        |
| `POST`   | `/tarefas`            | Cria uma nova tarefa.               | `{ "titulo": "Nova Tarefa", "descricao": "...", "prioridade": "Alta", "data_entrega": "2025-12-31" }`      |
| `PUT`    | `/tarefas/:id`        | Atualiza uma tarefa completa.       | `{ "titulo": "Tarefa Editada", "descricao": "...", "status": "Finalizada", "prioridade": "Baixa", "data_entrega": "2025-12-30" }` |
| `PUT`    | `/tarefas/:id/status` | Atualiza apenas o status da tarefa. | `{ "status": "Finalizada" }`                                                                               |
| `DELETE` | `/tarefas/:id`        | Deleta uma tarefa específica.       | N/A                                                                                                        |

---

## 📁 Estrutura de Pastas

O projeto está organizado na seguinte estrutura `client/server` para separar as responsabilidades:

```
toDoList/
├── client/
│   ├── css/
│   │   └── styles.css
│   ├── js/
│   │   └── app.js
│   └── index.html          # Interface do usuário
│
└── server/
    ├── config/
    │   └── db.js           # Configuração do banco de dados
    ├── controllers/
    │   └── tarefasController.js
    ├── routes/
    │   └── routes.js
    ├── services/
    │   └── tarefasService.js
    ├── node_modules/
    ├── app.js              # Arquivo principal do servidor
    └── package.json
```

Desenvolvido por **[Vitor Cyriaco]**