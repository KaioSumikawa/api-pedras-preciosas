const express = require('express');
const connectDB = require('./config/db');
const stoneRoutes = require('./routes/stoneRoutes');
const dotenv = require('dotenv');
dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;

// Conectar ao MongoDB
connectDB();

// Middlewares
app.use(express.json()); // para ler JSON no body

// Rotas
app.use('/api/pedras', stoneRoutes);

// Rota de teste
app.get('/', (req, res) => {
  res.send('API de Pedras Preciosas funcionando!');
});

// Iniciar servidor
app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});