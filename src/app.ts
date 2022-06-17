import express from 'express'
import morgan from 'morgan'
import cors from 'cors'
import useUserRouter from "./routes/user.routes"
const app = express()

app.use(morgan('dev'))
app.use(cors())
app.use(useUserRouter)


export default app;