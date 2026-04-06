// Importando o Model
import Stone from "../models/Stone.js";

class stoneService {

    // 🔹 LISTAR TODAS AS PEDRAS
    async getAll() {
        try {
            const stones = await Stone.find();
            return stones;
        } catch (error) {
            console.log(error);
        }
    }

    // 🔹 CADASTRAR UMA PEDRA
    async Create(name, color, appearance, origin, scientific) {
        try {
            const newStone = new Stone({
                name,
                color,
                appearance,
                origin,
                scientific
            });

            await newStone.save();

        } catch (error) {
            console.log(error);
        }
    }

    // 🔹 DELETAR UMA PEDRA
    async Delete(id) {
        try {
            await Stone.findByIdAndDelete(id);
            console.log(`Pedra com a id: ${id} foi deletada.`);
        } catch (error) {
            console.log(error);
        }
    }

    // 🔹 ATUALIZAR UMA PEDRA
    async Update(id, name, color, appearance, origin, scientific) {
        try {
            const updatedStone = await Stone.findByIdAndUpdate(
                id,
                {
                    name,
                    color,
                    appearance,
                    origin,
                    scientific
                },
                { new: true }
            );

            console.log(`A pedra com a ID ${id} foi alterada.`);
            return updatedStone;

        } catch (error) {
            console.log(error);
        }
    }

    // 🔹 BUSCAR UMA PEDRA
    async getOne(id) {
        try {
            const stone = await Stone.findOne({ _id: id });
            return stone;
        } catch (error) {
            console.log(error);
        }
    }
}

// Exportando
export default new stoneService();