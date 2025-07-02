import {Router} from 'express';
import UserController from "../controllers/UserController.js"
import {validarDatos } from '../middlewares/validarDatos.js'

const userController = new UserController();

const userRoutes = Router();

userRoutes.get("/",userController.getAllUserController)
userRoutes.get("/profile", userController.profile)
userRoutes.get("/:id",userController.getUserControllerById)
userRoutes.post("/",validarDatos, userController.postUserController)
userRoutes.put("/:id", validarDatos, userController.putUserController)
userRoutes.delete("/:id",userController.deleteUserController)
userRoutes.post("/login", userController.login)


export default userRoutes;

