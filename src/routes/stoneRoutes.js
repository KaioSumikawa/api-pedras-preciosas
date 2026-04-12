import express from "express";
import stoneController from "../controllers/stoneController.js";
import auth from "../middleware/auth.js";

const router = express.Router();

router.use(auth);

router.post("/", stoneController.createStone);
router.get("/", stoneController.getAllStones);
router.get("/:id", stoneController.getOneStone);
router.put("/:id", stoneController.updateStone);
router.delete("/:id", stoneController.deleteStone);

export default router;