"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const UserController_1 = require("../controllers/UserController");
//import { getProducts } from "../controllers/ProducsController";
const userRouter = (0, express_1.Router)();
userRouter.post("/user", UserController_1.createUser);
userRouter.get("/user", UserController_1.getUser);
userRouter.get("/user/:id", UserController_1.getUserById);
userRouter.delete("/user/:id", UserController_1.DeleteUser);
userRouter.put("/user/:id", UserController_1.UserUpdate);
//produts
exports.default = userRouter;
