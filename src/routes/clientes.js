const express = require("express");
const router = express.Router();
const db = require("./dev.db");

/**
 * @swagger
 * /clientes:
 *   get:
 *     summary: Listar todos os clientes
 *     tags:
 *       - Clientes
 *     responses:
 *       200:
 *         description: Lista de clientes
 */
router.get("/", clientesController.listar);

/**
 * @swagger
 * /clientes:
 *   post:
 *     summary: Criar um novo cliente
 *     tags:
 *       - Clientes
 *     
 */
router.post("/", clientesController.criar);

router.get("/:id", clientesController.buscarPorId);
router.put("/:id", clientesController.atualizar);
router.delete("/:id", clientesController.deletar)

module.exports = router;