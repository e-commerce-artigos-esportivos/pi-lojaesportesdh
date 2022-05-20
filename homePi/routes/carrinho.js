const express = require('express');
const router = express.Router();

const carrinhoController = require("../controllers/musicaContoller")

router.get("/", carrinhoController.carrinho)


module.exports = router;