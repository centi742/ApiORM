import {Column,Entity,PrimaryGeneratedColumn,BaseEntity} from "typeorm";

@Entity()
export class Modelo extends BaseEntity{
    @PrimaryGeneratedColumn()
    id: number
    @Column()
    modelo: string
}