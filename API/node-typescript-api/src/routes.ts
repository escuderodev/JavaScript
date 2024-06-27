import { Router } from "express";
import { ClientController } from "./controllers/ClientController";
import { Request, Response } from "express";

export const router = Router();
const clientController = new ClientController();

router.get("/", (req: Request, res: Response) => {
    return res.status(200).json({message: "Bem vindo a minha API..."});
});

router.get("/client", clientController.findAll);

router.post("/client", clientController.create);

router.delete("/client/:id", (req: Request, res: Response) => {
    const client = req.body;
    console.log(client);
    return res.status(200).json({message: "Cliente deletado com sucesso!"})
});