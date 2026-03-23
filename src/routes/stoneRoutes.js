const express = require('express');
const router = express.Router();
const stoneController = require('../controllers/stoneController');

router.post('/', stoneController.createStone);
router.get('/', stoneController.getAllStones);
router.get('/:id', stoneController.getStoneById);
router.put('/:id', stoneController.updateStone);
router.delete('/:id', stoneController.deleteStone);

module.exports = router;