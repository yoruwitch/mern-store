import express from "express";
import {
    createProduct,
    deleteProduct,
    getProducts,
    updatedProduct,
} from "../controllers/product.controller.js";

const router = express.Router();

/**
 * @swagger
 * components:
 *   schemas:
 *     Product:
 *       type: object
 *       required:
 *         - name
 *         - price
 *         - image
 *       properties:
 *         id:
 *           type: string
 *           description: Product ID (generated automatically)
 *         name:
 *           type: string
 *           description: Name of the product
 *         price:
 *           type: number
 *           description: Price of the product
 *         image:
 *           type: string
 *           description: URL of the product image
 *         createdAt:
 *           type: string
 *           format: date-time
 *           description: Timestamp when the product was created
 *         updatedAt:
 *           type: string
 *           format: date-time
 *           description: Timestamp when the product was last updated
 *       example:
 *         id: "507f1f77bcf86cd799439011"
 *         name: "Mechanical Keyboard"
 *         price: 199.99
 *         image: "https://example.com/images/keyboard.jpg"
 *         createdAt: "2025-03-08T12:00:00.000Z"
 *         updatedAt: "2025-03-08T12:30:00.000Z"
 */

/**
 * @swagger
 * /api/products:
 *   get:
 *     summary: Get a list of all products
 *     tags: [Products]
 *     responses:
 *       200:
 *         description: List of all products
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Product'
 */
router.get("/", getProducts);

/**
 * @swagger
 * /api/products:
 *   post:
 *     summary: Create a new product
 *     tags: [Products]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               name:
 *                 type: string
 *                 description: Name of the product
 *                 example: "Gaming Mouse"
 *               price:
 *                 type: number
 *                 description: Price of the product
 *                 example: 79.99
 *               image:
 *                 type: string
 *                 description: URL of the product image
 *                 example: "https://example.com/images/mouse.jpg"
 *     responses:
 *       201:
 *         description: Product successfully created
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Product'
 */
router.post("/", createProduct);

/**
 * @swagger
 * /api/products/{id}:
 *   put:
 *     summary: Update a product by ID
 *     tags: [Products]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         description: ID of the product to update
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               name:
 *                 type: string
 *                 description: Name of the product
 *                 example: "Wireless Headphones"
 *               price:
 *                 type: number
 *                 description: Price of the product
 *                 example: 149.99
 *               image:
 *                 type: string
 *                 description: URL of the product image
 *                 example: "https://example.com/images/headphones.jpg"
 *     responses:
 *       200:
 *         description: Product successfully updated
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Product'
 */
router.put("/:id", updatedProduct);

/**
 * @swagger
 * /api/products/{id}:
 *   delete:
 *     summary: Delete a product by ID
 *     tags: [Products]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         description: ID of the product to delete
 *     responses:
 *       200:
 *         description: Product successfully deleted
 */
router.delete("/:id", deleteProduct);

export default router;
