import { Router } from "express";
import MascotasController from "../controllers/MascotasController.js";


const mascotasController = new MascotasController();
const mascotasRouter = Router();

mascotasRouter.get("/",mascotasController.getMascotasPorDuenioController);
mascotasRouter.get("/:id", mascotasController.mascotaInfo);
mascotasRouter.post("/", mascotasController.postMascotaController);
mascotasRouter.put("/:id", mascotasController.putMascotaController);
mascotasRouter.delete("/:id",mascotasController.deleteMascotaController);

export default mascotasRouter;