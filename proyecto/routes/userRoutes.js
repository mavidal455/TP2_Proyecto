import {Router} from 'express';
import UserController from '../controllers/UserController.js';


const userController = new UserController();

const userRoutes = Router();

export default userRoutes;