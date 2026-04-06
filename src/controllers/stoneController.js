// Importando o Service
import stoneService from "../services/stoneService.js";

// Importando o ObjectId
import { ObjectId } from "mongodb";

// 🔹 LISTAR TODAS AS PEDRAS
const getAllStones = async (req, res) => {
    try {
        const stones = await stoneService.getAll();
        return res.status(200).json({ stones: stones });
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            error: "Erro interno do servidor. Não foi possível listar as pedras."
        });
    }
};

// 🔹 CADASTRAR UMA PEDRA
const createStone = async (req, res) => {
    try {
        // pegando os dados do body
        const { name, color, appearance, origin, scientific } = req.body;

        await stoneService.Create(name, color, appearance, origin, scientific);

        return res.status(201).json({
            message: "A pedra foi cadastrada com sucesso!"
        });

    } catch (error) {
        console.log(error);
        return res.status(500).json({
            error: "Erro interno do servidor. Não foi possível cadastrar a pedra."
        });
    }
};

// 🔹 DELETAR UMA PEDRA
const deleteStone = async (req, res) => {
    try {
        const id = req.params.id;

        if (ObjectId.isValid(id)) {
            await stoneService.Delete(id);
            return res.status(204).send(); // ✔️ correto pra 204
        } else {
            return res.status(400).json({
                error: "Ocorreu um erro na validação da ID."
            });
        }

    } catch (error) {
        console.log(error);
        return res.status(500).json({
            error: "Erro interno do servidor."
        });
    }
};

// 🔹 ATUALIZAR UMA PEDRA
const updateStone = async (req, res) => {
    try {
        const id = req.params.id;

        if (ObjectId.isValid(id)) {
            const { name, color, appearance, origin, scientific } = req.body;

            const stone = await stoneService.Update(
                id,
                name,
                color,
                appearance,
                origin,
                scientific
            );

            return res.status(200).json({
                message: "Pedra atualizada com sucesso!",
                stone: stone
            });

        } else {
            return res.status(400).json({
                error: "Ocorreu um erro na validação da ID."
            });
        }

    } catch (error) {
        console.log(error);
        return res.status(500).json({
            error: "Erro interno do servidor."
        });
    }
};

// 🔹 BUSCAR UMA PEDRA
const getOneStone = async (req, res) => {
    try {
        const id = req.params.id;

        if (ObjectId.isValid(id)) {
            const stone = await stoneService.getOne(id);

            if (!stone) {
                return res.status(404).json({
                    error: "A pedra buscada não foi encontrada."
                });
            }

            return res.status(200).json({ stone });

        } else {
            return res.status(400).json({
                error: "A ID informada é inválida."
            });
        }

    } catch (error) {
        console.log(error);
        return res.status(500).json({
            error: "Erro interno do servidor."
        });
    }
};

export default {
    getAllStones,
    createStone,
    deleteStone,
    updateStone,
    getOneStone
};