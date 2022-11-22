import {Column,Entity,PrimaryGeneratedColumn,BaseEntity,OneToOne} from "typeorm";
import {  Catalogo  } from "./catalogo";
@Entity()
 export class Marca extends BaseEntity{
    @PrimaryGeneratedColumn()
    id: number
    @Column()
    nombre: string

    @OneToOne((type)=>Catalogo, (catalogo)=>catalogo.Marca)
    catalogo: Catalogo
 }