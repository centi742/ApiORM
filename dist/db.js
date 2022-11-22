"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppDataSource = void 0;
const typeorm_1 = require("typeorm");
const catalogo_1 = require("./entities/catalogo");
const marca_1 = require("./entities/marca");
const modelo_1 = require("./entities/modelo");
const transmicion_1 = require("./entities/transmicion");
const user_1 = require("./entities/user");
const producs_1 = require("./entities/producs");
exports.AppDataSource = new typeorm_1.DataSource({
    type: 'mysql',
    host: 'localhost',
    username: 'root',
    password: '',
    port: 3306,
    database: 'ApiORM',
    logging: true,
    entities: [user_1.User, transmicion_1.Transmicion, modelo_1.Modelo, marca_1.Marca, producs_1.Producs, catalogo_1.Catalogo],
    synchronize: true,
});
