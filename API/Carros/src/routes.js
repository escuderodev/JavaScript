const express = require("express");
const router = express.Router();
const CarroController = require('./controllers/CarroController.js');

router.get('/carros', CarroController.findAll);

module.exports = router;