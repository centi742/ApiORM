"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const CatalogoController_1 = require("../controllers/CatalogoController");
const CatalogoRouter = (0, express_1.Router)();
CatalogoRouter.get('/Catalogo', CatalogoController_1.getCatalago);
exports.default = CatalogoRouter;
