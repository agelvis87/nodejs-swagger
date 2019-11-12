const express = require("express");

const app = express();

/**
 * @swagger
 * /customer:
 *   post:
 *     tags:
 *       - Customer
 *     summary: Create customer.
 *     description: Create customer on database.
 *     produces:
 *       - application/json
 *     consumes:
 *       - application/json
 *     parameters:
 *       - name: body
 *         in: body
 *         schema:
 *           $ref: '#/definitions/Customer'
 *           type: object
 *           properties:
 *             name:
 *               type: string
 *             lastName:
 *               type: string
 *             age:
 *               type: number
 *         required:
 *           - name
 *           - lastName
 *           - age
 *     responses:
 *       200:
 *         description: User created
 *       400:
 *         description: Error creating user.
 *       default:
 *         description: Unexpected error.
 *
 */
app.post("/customer", function(req, res) {
  /**
   * Logica del API Rest............!
   */

  res.json({
    ok: true,
    message: "Creacion de cliente"
  });
});

/**
 * @swagger
 * /customer:
 *   get:
 *     tags:
 *       - Customer
 *     summary: Get Customer.
 *     description: Get Customer on database.
 *     produces:
 *       - application/json
 *     consumes:
 *       - application/json
 *     parameters:
 *       - name: body
 *         in: body
 *         schema:
 *           $ref: '#/definitions/Customer'
 *           type: object
 *           properties:
 *             name:
 *               type: string
 *             lastName:
 *               type: string
 *             age:
 *               type: number
 *         required:
 *           - name
 *     responses:
 *       200:
 *         description: Customer finded
 *       400:
 *         description: Error finding customer.
 *       default:
 *         description: Unexpected error.
 *
 */
app.get("/user", (req, res) => {
  /**
   * Logica del API Rest............!
   */

  res.json({
    ok: true,
    message: "Consulta de cliente"
  });
});

/**
 * @swagger
 * tags:
 *   name: Customer
 *   description: Customer Services.
 * definitions:
 *   Customer:
 *    properties:
 *      name:
 *        type: string
 *        example: Agelvis
 *      lastName:
 *        type: string
 *        example: Carreño
 *      age:
 *        type: number
 *        example: 32
 */
module.exports = app;
