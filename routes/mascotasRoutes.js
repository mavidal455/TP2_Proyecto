import { Router } from "express";
import MascotasController from "../controllers/MascotasController";


const mascotasController = new MascotasController();
const mascotasRouter = Router();

mascotasRouter.get("/mascotas",mascotasController.getMascotasPorDuenioController);
mascotasRouter.get("/mascotas/:id", mascotasController.mascotaInfo);
mascotasRouter.post("/mascotas", mascotasController.postMascotaController);
mascotasRouter.put("/mascotas/:id", mascotasController.putMascotaController);
mascotasRouter.delete("/mascotas/:id",mascotasController.deleteMascotaController);