import exp from "constants";
import { Request,Response } from "express";
import {Producs} from "../entities/producs";
import {v4 as uuidv4} from "uuid";
import fs from "fs-extra";
import { User } from "../entities/user";
export const CreateProducs = async (req:Request,res:Response)=>{
  
//valido si hay algo subido
  if (!req.files || Object.keys(req.files).length === 0) {
    return res.status(400).json({
        ok: false,
        message: "no hay una imagen"
    });
  }
//extraigo el dato subido el archivo
  let image:any = req.files.image;
// creo la varible que tendra en nombre de la imagen
  let filename = "";
  //reviso la extenion para verificar si es una imagen
if (image.minetype === 'image/png'||image.minetype === 'image/jpeg'|| image.minetype === 'image/gif'){
    //creo el path donde segurdara la imagen con su ruta 
    const path = `./uploads${req.baseUrl}`;
    //extraigo la imagen mas la extenion
    const fileExtension = image.minetype.split('/')[1];
    //armamos el nombre ramdom de la iamgen mas la extencion
    filename = `${uuidv4()}.${fileExtension}`;
    // revisa si exteiste la ruta de la imagen si no esta la crea
    await fs.ensureDir(path);

    //mueve la imagen a la ruta
  await image.mv(`${path}/${filename}`,function(err:any){
        if(err){
            return res.status(500).json({
                ok:false,
                message: "error al guardar el produto",
                errors:err
            });
        }
    });
}



try{
  const {name,descripcion,photo} = req.body();
  const producs = new Producs();

  producs.name = name;
  producs.descripcion = descripcion;
  producs.photo = filename;
 
  await photo.save();
  res.send("you are in products!");
  res.status(200).json({
    ok: true,
    message: "operacion exitosa"
  })
}catch{
  return res.status(500).json({
    ok:false,
    message: "error al guardar el produto"
    
});
}

res.send("you are in products!");

};




export const getProducts = async (req: Request, res: Response) => {
  console.log('hola')
 
  await res.send("products");
};