const Stone = require('../models/Stone');

// Criar uma nova pedra
exports.createStone = async (req, res) => {
  try {
    const stone = await Stone.create(req.body);
    res.status(201).json(stone);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

// Listar todas as pedras
exports.getAllStones = async (req, res) => {
  try {
    const stones = await Stone.find();
    res.status(200).json(stones);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Buscar uma pedra por ID
exports.getStoneById = async (req, res) => {
  try {
    const stone = await Stone.findById(req.params.id);
    if (!stone) return res.status(404).json({ error: 'Pedra não encontrada' });
    res.status(200).json(stone);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Atualizar uma pedra (substituição total ou parcial)
exports.updateStone = async (req, res) => {
  try {
    const stone = await Stone.findByIdAndUpdate(req.params.id, req.body, { new: true, runValidators: true });
    if (!stone) return res.status(404).json({ error: 'Pedra não encontrada' });
    res.status(200).json(stone);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

// Deletar uma pedra
exports.deleteStone = async (req, res) => {
  try {
    const stone = await Stone.findByIdAndDelete(req.params.id);
    if (!stone) return res.status(404).json({ error: 'Pedra não encontrada' });
    res.status(204).send(); // sem conteúdo
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};  