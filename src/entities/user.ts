import {Column,Entity,PrimaryGeneratedColumn,CreateDateColumn,UpdateDateColumn,BaseEntity} from "typeorm";

@Entity()
export class User extends BaseEntity{
   @PrimaryGeneratedColumn()
    id: number
    @Column()
    name: string
    @Column()
    email :string
    @Column()
    phone: string
    @Column()
    password: string
    @CreateDateColumn()
    createdAd: Date
    @UpdateDateColumn()
    updateAd : Date
}