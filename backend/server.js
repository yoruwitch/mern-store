import express from "express";
import dotenv from "dotenv";
import { connectDb } from "./config/db.js";
import Product from "./models/product.model.js";

dotenv.config();
const app = express();
app.use(express.json()); // this middleware allow us to accept JSON data in the req.body

app.get("/api/products", async (req, res) => {
    
});

app.post("/api/products", async (req, res) => {
    const product = req.body;

    if (!product.name || !product.price || !product.image) {
        return res
            .status(400)
            .json({ sucess: false, mesage: "Please provide all fields" });
    }
    const newProduct = new Product(product);

    try {
        await newProduct.save();
        res.status(201).json({
            sucess: true,
            data: newProduct,
        });
    } catch (error) {
        console.error(error);
        res.status(500).json({
            sucess: false,
            message: "Internal server error",
        });
    }
});

app.delete("/api/products/:id", async (req, res) => {
    const { id } = req.params;
    try {
        await Product.findByIdAndDelete(id);
        res.status(200).json({
            sucess: true,
            message: "Product deleted sucessfully",
        });
    } catch (error) {
        res.status(404).json({
            sucess: false,
            message: "This product does not exist in stock",
        });
    }
});

console.log(process.env.MONGO_URI);

app.listen(5000, () => {
    connectDb();
    console.log("Started in localhost:5000");
});
