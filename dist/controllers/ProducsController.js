"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Pruebaimagen = exports.getProducts = exports.createProducts = void 0;
const producs_1 = require("../entities/producs");
const createProducts = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { name, descripcion, image } = req.body;
        const producto = new producs_1.Producs();
        producto.name = name;
        producto.descripcion = descripcion;
        producto.photo = image;
        yield producto.save();
        console.log('user is saved');
        return res.status(200).json({
            ok: true,
            message: "user is saved"
        });
    }
    catch (_a) {
        return res.status(500).json({
            ok: false,
            message: "error saved producs"
        });
    }
});
exports.createProducts = createProducts;
const getProducts = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const allProducts = yield producs_1.Producs.find();
        res.send(allProducts);
    }
    catch (_b) {
    }
});
exports.getProducts = getProducts;
const Pruebaimagen = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const imagen = req.file;
        const filextencion = imagen === null || imagen === void 0 ? void 0 : imagen.mimetype.split('/')[1];
        ;
        //const nameFile = `${imagen?.filename}.${filextencion}`;
        yield console.log(imagen);
        //await console.log(imagen?.filename);
        yield console.log(imagen === null || imagen === void 0 ? void 0 : imagen.filename);
    }
    catch (_c) {
        console.log("error");
    }
});
exports.Pruebaimagen = Pruebaimagen;
