import {Column,Entity,PrimaryGeneratedColumn,CreateDateColumn,UpdateDateColumn,BaseEntity} from "typeorm";



@Entity()
export class Producs extends BaseEntity{
    @PrimaryGeneratedColumn()
    id : number
    @Column()
    name: string
    @Column()
    descripcion: string
    @Column()
    photo: string
    @CreateDateColumn()
    createdAd: Date
    @UpdateDateColumn()
    updateAd : Date

}