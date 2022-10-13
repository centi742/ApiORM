"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const fs = require('fs');
const path = require('path');
const multer_1 = __importDefault(require("multer"));
const ProducsController_1 = require("../controllers/ProducsController");
const dirpath = path.join(__dirname, '/uploads');
const storage = multer_1.default.diskStorage({
    destination: function (req, file, cb) {
        cb(null, dirpath);
    },
    filename: function (req, file, cb) {
        const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9);
        const filextencion = file === null || file === void 0 ? void 0 : file.mimetype.split('/')[1];
        cb(null, file.fieldname + '-' + uniqueSuffix + '.' + filextencion);
    }
});
const upload = (0, multer_1.default)({ storage: storage });
const produtosRoutes = (0, express_1.Router)();
//produtosRoutes.post('/productos',createProducts);
produtosRoutes.get('/productos', ProducsController_1.getProducts);
produtosRoutes.post('/producto/uploads', upload.single('imagen'), ProducsController_1.Pruebaimagen);
exports.default = produtosRoutes;
