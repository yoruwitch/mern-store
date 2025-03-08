import express from "express";
import dotenv from "dotenv";
import { connectDb } from "./config/db.js";
import productRoutes from './routes/product.route.js'

dotenv.config();

const app = express();
app.use(express.json()); // this middleware allow us to accept JSON data in the req.body
app.use("/api/products", productRoutes);

app.listen(5000, () => {
    connectDb();
    console.log("Started in localhost:5000");
});
