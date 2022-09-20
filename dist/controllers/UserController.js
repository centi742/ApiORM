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
exports.UserUpdate = exports.DeleteUser = exports.getUserById = exports.getUser = exports.createUser = void 0;
const user_1 = require("../entities/user");
const createUser = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { name, email, phone, password } = req.body;
        const user = new user_1.User();
        user.name = name;
        user.email = email;
        user.phone = phone;
        user.password = password;
        yield user.save();
        res.send("this is user");
        console.log({ status: "User is saved" });
    }
    catch (error) {
        console.log({ status: error });
        console.log(error);
    }
    //user.name = "Oscari"
    //user.email= "Oscardi@gmail.com"
    // user.phone= "7224232"
    //user.password = "1234"
    //await user.save();
    //const allUser = await User.find()
    // res.send(allUser);
});
exports.createUser = createUser;
const getUser = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const allUser = yield user_1.User.find();
        res.send(allUser);
        console.log(allUser);
    }
    catch (error) {
        console.log({ status: error });
        res.send(error);
    }
});
exports.getUser = getUser;
const getUserById = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { id } = req.params;
        const getUserId = yield user_1.User.findOneBy({
            id: parseInt(id),
        });
        res.send(getUserId);
    }
    catch (error) {
        console.log({ status: error });
        res.send(error);
    }
});
exports.getUserById = getUserById;
const DeleteUser = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { id } = req.params;
        const response = yield user_1.User.delete({ id: parseInt(id) });
        if (response.affected == 0) {
            return res.status(400).json({ message: "user not found :(" });
        }
        return res.sendStatus(204);
    }
    catch (error) {
        if (error instanceof Error) {
            return res.status(500).json({ message: error.message });
        }
    }
});
exports.DeleteUser = DeleteUser;
const UserUpdate = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        //verifica que el usuario exista
        const { id } = req.params;
        const user = yield user_1.User.findOneBy({ id: parseInt(id) });
        if (!user) {
            return res.sendStatus(404).json({ messaje: "User don't exist" });
        }
        //opera la actualizacion
        yield user_1.User.update({ id: parseInt(id) }, req.body);
        return res.sendStatus(204);
    }
    catch (error) {
        console.log(error);
    }
});
exports.UserUpdate = UserUpdate;
