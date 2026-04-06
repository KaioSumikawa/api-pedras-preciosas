import express from "express";
import mongoose from "mongoose";
import cors from "cors";

// IMPORTAR ROTAS
import stoneRoutes from "./routes/stoneRoutes.js";
import userRoutes from "./routes/userRoutes.js";

// IMPORTAR DOTENV
import dotenv from "dotenv";
dotenv.config();

const app = express();

// CONFIGURAÇÕES
app.use(express.json());
app.use(cors());

// ROTAS
app.use("/", stoneRoutes);
app.use("/", userRoutes);

// MONTANDO A STRING DE CONEXÃO
const uri = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASSWORD}@cluster0.u00jdaa.mongodb.net/api-pedras?retryWrites=true&w=majority`;

// CONEXÃO COM MONGO ATLAS
mongoose.connect(uri)
.then(() => {
    console.log("Conectado ao MongoDB Atlas");
})
.catch((error) => {
    console.log("Erro ao conectar no MongoDB:", error);
});

// SERVIDOR
const port = 4000;

app.listen(port, (error) => {
  if (error) {
    console.log(error);
  } else {
    console.log(`API rodando em http://localhost:${port}`);
  }
});