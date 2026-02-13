const express = require("express");
const router = express.Router();

const clientesController = require("../controllers/clientes.controller");

/**
 * @swagger
 * /clientes:
 *   post:
 *     summary: Criar um novo cliente
 *     tags: [Clientes]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/ClienteInput'
 *     responses:
 *       201:
 *         description: Cliente criado com sucesso
 *       500:
 *         description: Erro interno do servidor
 */
router.post("/", clientesController.criar);

/**
 * @swagger
 * /clientes:
 *  get:
 *    summary: Listar todos os clientes
 *    tags: [Clientes]
 *    responses:
 *      200:
 *          description: Lista de clientes!
 */
router.get("/", clientesController.listar);

/**
 * @swagger
 * /clientes/{id}:
 *   get:
 *     summary: Buscar cliente por ID
 *     tags: [Clientes]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *     responses:
 *       200:
 *          description: Cliente encontrado!
 *       404:
 *          description: Cliente não encontrado!
 */
router.get("/:id", clientesController.buscarPorId);

/**
 * @swagger
 * /clientes/{id}:
 *   put:
 *     summary: Atualizar cliente
 *     tags: [Clientes]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema: 
 *           type: integer
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/ClienteInput'
 *     responses:
 *       200:
 *          description: Cliente atualizado!
 */
router.put("/:id", clientesController.atualizar);

/**
 * @swagger
 * /clientes/{id}:
 *   delete:
 *     summary: Deletar cliente
 *     tags: [Clientes]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *     responses:
 *       200:
 *          description: Cliente deletado
 */
router.delete("/:id", clientesController.deletar)

module.exports = router;