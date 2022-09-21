import { Router } from "express";
import { createUser,DeleteUser,getUser, getUserById, UserUpdate} from "../controllers/UserController";
//import { getProducts } from "../controllers/ProducsController";
const userRouter = Router();


userRouter.post("/user",createUser);

userRouter.get("/user",getUser);

userRouter.get("/user/:id",getUserById);

userRouter.delete("/user/:id",DeleteUser);

userRouter.put("/user/:id", UserUpdate);

//produts


export default userRouter;