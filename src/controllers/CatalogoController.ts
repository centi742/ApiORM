import {Request, Response} from "express";
import {Catalogo} from "./../entities/catalogo";

export const getCatalago = async (req:Request,res:Response)=>{
    const allcatalogo = await Catalogo.find();

    if(!allcatalogo){
        res.send("no hay datos")
    }
    else{
        res.send(allcatalogo);
    }
    

}
