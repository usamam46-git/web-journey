import Router from 'express';
import { getProducts, addProduct, updateProduct, deleteProduct, getProductById } from '../controllers/products.controller.js';

const productsRouter = Router();

productsRouter.get('/', getProducts);
productsRouter.post('/', addProduct);
productsRouter.get('/:id', getProductById);
productsRouter.put('/:id', updateProduct);
productsRouter.delete('/:id', deleteProduct);

export default productsRouter;
