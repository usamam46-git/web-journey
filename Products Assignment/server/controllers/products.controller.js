import Product from "../models/products.model.js";
import mongoose from "mongoose";
import { asyncHandler } from "../utils/asyncHandler.js";
import { ApiResponse } from "../utils/apiResponse.js";
import { ApiError } from "../utils/apiError.js";

const addProduct = asyncHandler(async (req, res) => {
    const { name, description, price, category, inStock } = req.body;
    if (!name || !description || !price || !category) {
        throw new ApiError(400, "All fields are required");
    }

    const product = new Product({
        name,
        description,
        price,
        category,
        inStock
    });
    await product.save();
    res.status(201).json(new ApiResponse(201, product, "Product created successfully"));
}
);

const getProducts = asyncHandler(async (req, res) => {
    const products = await Product.find();
    if(!products.length){
        throw new ApiError(404, "No products found");
    }
    res.status(200).json(new ApiResponse(200, products, "Products fetched successfully"));
});

const getProductById = asyncHandler(async (req, res) => {
    const { id } = req.params;
    if (!mongoose.Types.ObjectId.isValid(id)) {
        throw new ApiError(400, "Invalid product ID");
    }
    const product = await Product.findById(id);
    if (!product) {
        throw new ApiError(404, "Product not found");
    }
    res.status(200).json(new ApiResponse(200, product, "Product fetched successfully"));
});

const updateProduct = asyncHandler(async (req, res) => {
    const { id } = req.params;
    const { name, description, price, category, inStock } = req.body;
    const product = await Product.findByIdAndUpdate(id, {
        name,
        description,
        price,
        category,
        inStock
    }, { new: true });
    if (!product) {
        throw new ApiError(404, "Product not found");
    }
    res.status(200).json(new ApiResponse(200, product, "Product updated successfully"));
});

const deleteProduct = asyncHandler(async (req, res) => {
    const { id } = req.params;
    if (!mongoose.Types.ObjectId.isValid(id)) {
        throw new ApiError(400, "Invalid product ID");
    }
    const product = await Product.findByIdAndDelete(id);
    if (!product) {
        throw new ApiError(404, "Product not found");
    }
    res.status(200).json(new ApiResponse(200, product, "Product deleted successfully"));
});

export { addProduct, getProducts, getProductById, updateProduct, deleteProduct };
