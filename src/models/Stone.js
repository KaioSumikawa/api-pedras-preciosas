const mongoose = require('mongoose');

// Subdocumento aninhado
const caracteristicasSchema = new mongoose.Schema({
  cor: { type: String, required: true },
  durezaMohs: { type: Number, min: 1, max: 10, required: true },
  origem: { type: String, required: true },
  brilho: { type: String }, // ex: "vítreo", "metálico"
});

const stoneSchema = new mongoose.Schema({
  nome: { type: String, required: true, unique: true },
  precoPorQuilate: { type: Number, required: true },
  estoque: { type: Number, default: 0 },
  caracteristicas: caracteristicasSchema, // documento aninhado
}, {
  timestamps: true // adiciona createdAt e updatedAt
});

module.exports = mongoose.model('Stone', stoneSchema);