import mongoose from "mongoose";

const descriptionSchema = new mongoose.Schema({
  cor: { type: String },
  durezaMohs: { type: Number, min: 1, max: 10 },
  origem: { type: String },
  brilho: { type: String }, // ex: "vítreo", "metálico"
});

const stoneSchema = new mongoose.Schema({
  nome: { type: String, required: true, unique: true },
  precoPorQuilate: { type: Number },
  estoque: { type: Number, default: 0 },
  caracteristicas: descriptionSchema, // documento aninhado
});

const Stone = mongoose.model('Stone', stoneSchema);

export default Stone;