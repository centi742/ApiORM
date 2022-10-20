import { Request,Response } from "express";
import { Producs } from "../entities/producs";
import multer from "multer";
import path from "path";
import fs from 'fs-extra';
import { send } from "process";




export const getProducts = async (req:Request,res:Response)=>{
  try{
    const allProducts = await Producs.find();
    res.send(allProducts);
  }catch{

  }
}

export const createProducts = async (req:Request,res:Response)=>{
  try{
    const imagen:any = req.file;  
    const {name,descripcion} = req.body;
    const producto = new Producs();

    producto.name = name;
    producto.descripcion = descripcion;
    producto.photo = imagen?.filename;

    await producto.save();

    console.log('user is saved')
    return res.status(200).json({
    ok: true,
      message: "user is saved"
    })
     //const filextencion = imagen?.mimetype.split('/')[1];;

    //const nameFile = `${imagen?.filename}.${filextencion}`;

    //await console.log(imagen)
    //await console.log(imagen?.filename);
    //await console.log(imagen?.filename);
    
  }catch{
    return res.status(500).json({
      ok: false,
      message: "error saved producs"
  
    })
  }

}


export const getImagenes = async(req:Request,res:Response)=>{
  const image = req.params.image;

  const pahtImage = path.resolve(__dirname,`../uploads/products/${image}`);

  if (await fs.existsSync(pahtImage)){
    res.sendFile(pahtImage);
  }else{
    const pahtImagenoimagen = path.resolve(__dirname,"../uploads/2748558.png")
    res.sendFile(pahtImagenoimagen);
  }
}