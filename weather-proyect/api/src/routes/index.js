import { Router } from "express";
import { userSchema } from "../db/schemas/user.schema";
const router = Router();

router.get("/", (req, res) => {

try{

  const modelUser = await userSchema.find()
  console.log(modelUser)
  
  res.render('userSchema', {

    modelUser: modelUser
    // modelUser: [
    //   {name: 'pepito', lastname: 'del sur', nickname: 'pepe', isAdmin: '', email: 'pepe@gmail.com', password: "1234", city:['Arg', 'Dubai'], favourites: ['Uruguay', 'EE.UU'], image:'', disable:'' }
    // ]
  })
}catch(error){
console.log(error)
}





});

export default router;
