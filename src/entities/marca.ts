import {Column,Entity,PrimaryGeneratedColumn,BaseEntity} from "typeorm";

@Entity()
 export class Marca extends BaseEntity{
    @PrimaryGeneratedColumn()
    id: number
    @Column()
    nombre: string
 }