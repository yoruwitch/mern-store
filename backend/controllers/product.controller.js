import Product from "../models/product.model.js";
import mongoose from "mongoose";

export const getProducts = async (req, res) => {
    try {
        const products = await Product.find({});
        res.status(200).json({ sucess: true, data: products });
    } catch (error) {
        console.log("Error fetching the products: ", error.mesage);
        res.status(500).json({ sucess: false, message: "Server error" });
    }
};

export const createProduct = async (req, res) => {
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
};

export const updatedProduct = async (req, res) => {
    const { id } = req.params;

    const product = req.body;

    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res
            .status(404)
            .json({ sucess: false, message: "Invalid ID product" });
    }

    try {
        const updatedProduct = await Product.findByIdAndUpdate(id, product, {
            new: true,
        });
        res.status(200).json({ sucess: true, data: updatedProduct });
    } catch (error) {
        res.status(500).json({ sucess: false, message: "Server error" });
    }
};

export const deleteProduct = async (req, res) => {
    const { id } = req.params;

    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res
            .status(404)
            .json({ sucess: false, message: "Invalid ID product" });
    }
    
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
};
