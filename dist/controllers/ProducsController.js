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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteProducts = exports.getImagenes = exports.createProducts = exports.getProducts = void 0;
const producs_1 = require("../entities/producs");
const path_1 = __importDefault(require("path"));
const fs_extra_1 = __importDefault(require("fs-extra"));
const getProducts = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const Photo = yield producs_1.Producs.find({
            select: {
                photo: true,
            },
        });
        const pahtImage = path_1.default.resolve(__dirname, `../uploads/products/${Photo}`);
        if (yield fs_extra_1.default.existsSync(pahtImage)) {
            const allProducts = yield producs_1.Producs.find({
                select: {
                    id: true,
                    name: true,
                    photo: false,
                    descripcion: true,
                    createdAd: false,
                    updateAd: false,
                },
            });
            res.sendFile(pahtImage);
            res.send(allProducts);
        }
        else {
            const pahtImagenoimagen = path_1.default.resolve(__dirname, "../uploads/2748558.png");
            res.sendFile(pahtImagenoimagen);
        }
        //res.send(allProducts);
    }
    catch (_a) {
        res.send("lo siento hay un error");
    }
});
exports.getProducts = getProducts;
const createProducts = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const imagen = req.file;
        const { name, descripcion } = req.body;
        const producto = new producs_1.Producs();
        producto.name = name;
        producto.descripcion = descripcion;
        producto.photo = imagen === null || imagen === void 0 ? void 0 : imagen.filename;
        yield producto.save();
        console.log("user is saved");
        return res.status(200).json({
            ok: true,
            message: "user is saved",
        });
        //const filextencion = imagen?.mimetype.split('/')[1];;
        //const nameFile = `${imagen?.filename}.${filextencion}`;
        //await console.log(imagen)
        //await console.log(imagen?.filename);
        //await console.log(imagen?.filename);
    }
    catch (_b) {
        return res.status(500).json({
            ok: false,
            message: "error saved producs",
        });
    }
});
exports.createProducts = createProducts;
const getImagenes = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const image = req.params.image;
    const pahtImage = path_1.default.resolve(__dirname, `../uploads/products/${image}`);
    if (yield fs_extra_1.default.existsSync(pahtImage)) {
        res.sendFile(pahtImage);
    }
    else {
        const pahtImagenoimagen = path_1.default.resolve(__dirname, "../uploads/2748558.png");
        res.sendFile(pahtImagenoimagen);
    }
});
exports.getImagenes = getImagenes;
const deleteProducts = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const id = req.params.id;
    const imagen = req.params.image;
    yield console.log(id);
});
exports.deleteProducts = deleteProducts;
