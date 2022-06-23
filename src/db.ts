import { DataSource } from "typeorm";
import{User}  from "./entities/user"

export const AppDataSource = new DataSource({
    type: 'mysql',
    host: 'localhost',
    username: 'root',
    password: '',
    port: 3306,
    database: 'ApiORM',
    logging: true,
    entities:[User],
    //synchronize:true,
})