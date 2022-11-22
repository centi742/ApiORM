import { Router} from "express";
import { getCatalago } from "../controllers/CatalogoController";


const CatalogoRouter = Router();

CatalogoRouter.get('/Catalogo',getCatalago);

export default CatalogoRouter;