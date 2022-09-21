import exp from "constants";
import { Request, Response } from "express";

import { User } from "../entities/user";

export const createUser = async (req: Request, res: Response) => {
  try {
    const { name, email, phone, password } = req.body;

    const user = new User();

    user.name = name;
    user.email = email;
    user.phone = phone;
    user.password = password;
    await user.save();
    res.send("this is user");
    console.log({ status: "User is saved" });
  } catch (error) {
    console.log({ status: error });
    console.log(error);
  }

  //user.name = "Oscari"
  //user.email= "Oscardi@gmail.com"
  // user.phone= "7224232"
  //user.password = "1234"

  //await user.save();
  //const allUser = await User.find()
  // res.send(allUser);
};

export const getUser = async (req: Request, res: Response) => {
  try {
    const allUser = await User.find();
    res.send(allUser);
    console.log(allUser);
  } catch (error) {
    console.log({ status: error });
    res.send(error);
  }
};

export const getUserById = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;

    const getUserId = await User.findOneBy({
      id: parseInt(id),
    });
    res.send(getUserId);
  } catch (error) {
    console.log({ status: error });
    res.send(error);
  }
};

export const DeleteUser = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;

    const response = await User.delete({ id: parseInt(id) });

    if (response.affected == 0) {
      return res.status(400).json({ message: "user not found :(" });
    }

    return res.sendStatus(204);
  } catch (error) {
    if (error instanceof Error) {
      return res.status(500).json({ message: error.message });
    }
  }
};

export const UserUpdate = async(req:Request, res:Response)=>{
 try {
  //verifica que el usuario exista
  const{id} = req.params;
  
  const user = await User.findOneBy({id: parseInt(id)})

  if(!user){
    return res.sendStatus(404).json({messaje:"User don't exist"});
  }
  //opera la actualizacion
  await User.update({id: parseInt(id)},req.body)

  return res.sendStatus(204);


 } catch (error) {
  console.log(error);
 }
}

export const getProducts = async (req: Request, res: Response) => {

  await res.send("products");
};