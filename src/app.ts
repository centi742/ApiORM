import express from 'express';
import morgan from 'morgan';
import cors from 'cors';
import userRouter from "./routes/userRoutes";
import produtosRoutes from './routes/productosRoutes';
import CatalogoRouter from './routes/catalogoRoutes';
//import fileUpload from 'express-fileupload';
import multer from 'multer';




const app = express()


app.use(cors());
app.use(express.json());
//app.use(fileUpload());
app.use(morgan('dev'));
app.use(userRouter);
app.use(produtosRoutes);
app.use(CatalogoRouter);


export default app;