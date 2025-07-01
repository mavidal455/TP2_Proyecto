import {Router} from 'express';
import UserController from "../controllers/UserController.js"


const userController = new UserController();

const userRoutes = Router();

userRoutes.get("/",userController.getAllUserController)
userRoutes.get("/:id",userController.getUserControllerById)
userRoutes.post("/",userController.postUserController)
userRoutes.put("/users/:id",userController.putUserController)
userRoutes.delete("/:id",userController.deleteUserController)

export default userRoutes;

