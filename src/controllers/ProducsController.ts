import { Request,Response } from "express";
import { Producs } from "../entities/producs";
import multer from "multer";




export const createProducts = async(req:Request,res:Response)=>{
 try{
 
  const {name,descripcion,image} = req.body;
  const producto = new Producs();

  producto.name = name;
  producto.descripcion = descripcion;
  producto.photo = image;

  await producto.save();

  console.log('user is saved')
  return res.status(200).json({
   ok: true,
    message: "user is saved"
  })
}
catch{
  return res.status(500).json({
    ok: false,
    message: "error saved producs"

  })
} 
}

export const getProducts = async (req:Request,res:Response)=>{
  try{
    const allProducts = await Producs.find();
    res.send(allProducts);
  }catch{

  }
}

export const Pruebaimagen = async (req:Request,res:Response)=>{
  try{
    const imagen = req.file;

     const filextencion = imagen?.mimetype.split('/')[1];;

    //const nameFile = `${imagen?.filename}.${filextencion}`;

    await console.log(imagen)
    //await console.log(imagen?.filename);
    await console.log(imagen?.filename);
    
  }catch{
    console.log("error");
  }

}