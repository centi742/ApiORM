import { Router} from "express";
const fs = require('fs');
const path = require('path');
import multer from "multer";

import { createProducts,getProducts,getImagenes, deleteProducts} from "../controllers/ProducsController";

const dirpath = path.join(__dirname,'../uploads/products');

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, dirpath);
    },
    filename: function (req, file, cb) {
    
        const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9);
        const filextencion = file?.mimetype.split('/')[1];
        cb(null, file.fieldname + '-' + uniqueSuffix+'.'+filextencion)
    }
  });
  
  const upload = multer({ storage: storage })


const produtosRoutes = Router();



//produtosRoutes.post('/productos',createProducts);
produtosRoutes.get('/productos',getProducts);

produtosRoutes.post('/productos',upload.single('imagen'),createProducts);

produtosRoutes.get('/productos/imagen/:image',getImagenes);

produtosRoutes.delete('/productos/:id/',deleteProducts);
export default produtosRoutes;