import { Router } from "express";
import userRoutes from "./userRoutes.js";
import masacotasRoutes from "./mascotasRoutes.js"

const routes= Router()

//agregar routes.use e import para cada ruta creada
//La convencion del nombre del archivo es {model}Routes.js
routes.use("/users", userRoutes);
routes.use("/mascotas", masacotasRoutes);

export default routes