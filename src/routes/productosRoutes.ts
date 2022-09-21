import { Router } from "express";
import { getProducts } from "../controllers/UserController";


const produtosRoutes = Router();

produtosRoutes.get('/productos',getProducts);

export default produtosRoutes;