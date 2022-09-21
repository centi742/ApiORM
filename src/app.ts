import express from 'express';
import morgan from 'morgan';
import cors from 'cors';
import userRouter from "./routes/userRoutes";
import produtosRoutes from './routes/productosRoutes';

const app = express()


app.use(cors());
app.use(express.json());
app.use(morgan('dev'));
app.use(userRouter);
app.use(produtosRoutes);



export default app;