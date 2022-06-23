import { Router } from "express";
import { createUser,DeleteUser,getUser, getUserById, UserUpdate } from "../controllers/UserController";

const router = Router();


router.post("/user",createUser);

router.get("/user",getUser);

router.get("/user/:id",getUserById);

router.delete("/user/:id",DeleteUser);

router.put("/user/:id", UserUpdate);

export default router;