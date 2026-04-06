import mongoose from "mongoose";

// 🔬 documento aninhado (igual ao descriptions do professor)
const scientificSchema = new mongoose.Schema({
    scientificName: String, // nome científico
    type: String, // tipo (cristal, gema, etc.)
    hardness: Number, // escala de Mohs
    density: Number // densidade (g/cm³)
});

const stoneSchema = new mongoose.Schema({
    // 🔹 dados comuns
    name: String, // nome da pedra
    color: [String], // lista de cores
    appearance: String, // descrição visual
    origin: [String], // países/regiões

    // 🔬 aninhamento
    scientific: scientificSchema
});

const Stone = mongoose.model("Stone", stoneSchema);

export default Stone;