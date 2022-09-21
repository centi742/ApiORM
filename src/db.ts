import { DataSource } from "typeorm";
import { Catalogo } from "./entities/catalogo";
import { Marca } from "./entities/marca";
import { Modelo } from "./entities/modelo";
import { Transmicion } from "./entities/transmicion";
import{User}  from "./entities/user"
import { Producs } from "./entities/producs";

export const AppDataSource = new DataSource({
    type: 'mysql',
    host: 'localhost',
    username: 'root',
    password: '',
    port: 3306,
    database: 'ApiORM',
    logging: true,
    entities:[User,Transmicion,Modelo,Marca,Producs],
    //synchronize:true,
})