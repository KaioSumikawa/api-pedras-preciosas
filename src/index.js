import express from "express";
import mongoose from "mongoose";
import cors from "cors";

const app = express();
app.use(express.json());
app.use(cors())

mongoose.connect("")

// Iniciar servidor
const port = 4000
app.listen(port, (error) => {
  if (error) {
    console.log(error)
  } else {
      console.log(`API rodando em http://localhost:${port}`);
  }
});