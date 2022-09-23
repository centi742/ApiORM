import { Router } from "express";
import { getProducts,CreateProducs } from "../controllers/ProducsController";


const produtosRoutes = Router();

produtosRoutes.get('/productos',getProducts);

produtosRoutes.post('/productos',CreateProducs);



export default produtosRoutes;