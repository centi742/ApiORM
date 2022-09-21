"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const UserController_1 = require("../controllers/UserController");
const produtosRoutes = (0, express_1.Router)();
produtosRoutes.get('/productos', UserController_1.getProducts);
exports.default = produtosRoutes;
