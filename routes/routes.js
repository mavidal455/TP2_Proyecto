import { Router } from "express";
import userRoutes from "./userRoutes.js";


const routes= Router()

//agregar routes.use e import para cada ruta creada
//La convencion del nombre del archivo es {model}Routes.js
routes.use("/users", userRoutes);




export default routes