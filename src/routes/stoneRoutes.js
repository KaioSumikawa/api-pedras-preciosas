import stoneController from "../controllers/stoneController.js"; // default import

import express from "express";
const router = express.Router();

router.post("/", stoneController.createStone);
router.get("/", stoneController.getAllStones);
router.get("/:id", stoneController.getOneStone);
router.put("/:id", stoneController.updateStone);
router.delete("/:id", stoneController.deleteStone);

export default router;