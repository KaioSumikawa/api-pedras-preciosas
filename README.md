# API de Pedras Preciosas

API REST para gerenciamento de pedras preciosas, desenvolvida com **Node.js**, **Express** e **MongoDB Atlas** como parte da disciplina de Desenvolvimento Web III.

## Funcionalidades

- Cadastro de pedras preciosas com características detalhadas (cor, dureza Mohs, origem, brilho)
- Leitura de todas as pedras ou de uma específica por ID
- Atualização e exclusão de registros
- Documento aninhado (`caracteristicas`) dentro do documento principal
- Banco de dados hospedado na nuvem (MongoDB Atlas)
- Documentação da API em Markdown (pasta `docs/`)

## Tecnologias utilizadas

- [Node.js](https://nodejs.org/)
- [Express](https://expressjs.com/)
- [MongoDB](https://www.mongodb.com/) + [Mongoose](https://mongoosejs.com/)
- [dotenv](https://github.com/motdotla/dotenv)
- [Insomnia](https://insomnia.rest/) (testes)

## Pré-requisitos

Antes de começar, você precisará ter instalado:

- Node.js (versão 14 ou superior)
- NPM ou Yarn
- Conta no [MongoDB Atlas](https://www.mongodb.com/cloud/atlas) com um cluster criado

## Como executar o projeto

1. **Clone este repositório**

```bash
git clone https://github.com/seu-usuario/api-pedras-preciosas.git
cd api-pedras-preciosas
```
2. **Instale as dependências**

```bash
npm install
```
3. **Configure as variáveis de ambiente**
```bash
MONGODB_URI=mongodb+srv://<usuario>:<senha>@<cluster>.mongodb.net/<nome-do-banco>?retryWrites=true&w=majority
PORT=3000
```

4. **Execute a aplicação**
```bash
npm run dev
```
