import {Column,Entity,PrimaryGeneratedColumn,BaseEntity} from "typeorm";

@Entity()
export class Transmicion extends BaseEntity{
    @PrimaryGeneratedColumn()
    id: number
    @Column()
    tipo: string
}