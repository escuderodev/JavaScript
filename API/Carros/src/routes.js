const express = require("express");
const router = express.Router();
const CarroController = require('./controllers/CarroController.js');

router.get('/carros', CarroController.findAll);
router.get('/carros/:id', CarroController.findById);
router.post('/carros', CarroController.create);

module.exports = router;