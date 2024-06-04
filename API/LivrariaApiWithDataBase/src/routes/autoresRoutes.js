import express from "express";
import AutorController from "../controllers/AutorController.js";

const routes = express.Router();

routes.get("/autores", AutorController.findAll);
routes.get("/autores/:id", AutorController.findById);
routes.post("/autores", AutorController.create);
routes.put("/autores/:id", AutorController.update);
routes.delete("/autores/:id", AutorController.delete);

export default routes;