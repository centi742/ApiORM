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
exports.getProducts = exports.CreateProducs = void 0;
const producs_1 = require("../entities/producs");
const uuid_1 = require("uuid");
const fs_extra_1 = __importDefault(require("fs-extra"));
const CreateProducs = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    //valido si hay algo subido
    if (!req.files || Object.keys(req.files).length === 0) {
        return res.status(400).json({
            ok: false,
            message: "no hay una imagen"
        });
    }
    //extraigo el dato subido el archivo
    let image = req.files.image;
    // creo la varible que tendra en nombre de la imagen
    let filename = "";
    //reviso la extenion para verificar si es una imagen
    if (image.minetype === 'image/png' || image.minetype === 'image/jpeg' || image.minetype === 'image/gif') {
        //creo el path donde segurdara la imagen con su ruta 
        const path = `./uploads${req.baseUrl}`;
        //extraigo la imagen mas la extenion
        const fileExtension = image.minetype.split('/')[1];
        //armamos el nombre ramdom de la iamgen mas la extencion
        filename = `${(0, uuid_1.v4)()}.${fileExtension}`;
        // revisa si exteiste la ruta de la imagen si no esta la crea
        yield fs_extra_1.default.ensureDir(path);
        //mueve la imagen a la ruta
        yield image.mv(`${path}/${filename}`, function (err) {
            if (err) {
                return res.status(500).json({
                    ok: false,
                    message: "error al guardar el produto",
                    errors: err
                });
            }
        });
    }
    try {
        const { name, descripcion, photo } = req.body();
        const producs = new producs_1.Producs();
        producs.name = name;
        producs.descripcion = descripcion;
        producs.photo = filename;
        yield photo.save();
        res.status(200).json({
            ok: true,
            message: "operacion exitosa"
        });
    }
    catch (_a) {
        return res.status(500).json({
            ok: false,
            message: "error al guardar el produto"
        });
    }
    res.send("you are in products!");
});
exports.CreateProducs = CreateProducs;
const getProducts = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    res.send("products");
});
exports.getProducts = getProducts;
