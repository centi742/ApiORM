import { join } from "path";
import {Column,Entity,PrimaryGeneratedColumn,CreateDateColumn,UpdateDateColumn,BaseEntity,JoinColumn, OneToOne} from "typeorm";
import { Marca  } from "./marca";
import { Modelo } from "./modelo";
@Entity()
    export class Catalogo extends BaseEntity{
        @PrimaryGeneratedColumn()
        id: number
        
        
    
        // @Column()
        //marca: string
        //@Column()
        //modelo: string
        @Column()
        Photo: string
        @OneToOne(type=>Marca,{
            eager:true,
           //cascade:true
        } )
        @JoinColumn({name:'Id_marca'})
        Marca: Marca;
        @Column()
        descripcion: string
        @Column()
        precio:string
        @Column()
        transmicion: string
        @Column()
        tipo: string
        @Column()
        year: number
        @CreateDateColumn()
        createdAd: Date
        @UpdateDateColumn()
        updateAd : Date
       
    }
   