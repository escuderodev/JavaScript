import express, { json, Request, Response } from "express";
import { ClientController } from "./controllers/ClientController";

const clientController = new ClientController();

const app = express();

app.use(json());

app.get("/", (req: Request, res: Response) => {
    return res.status(200).json({message: "Bem vindo a minha API..."});
})

app.post("/client", clientController.createClient);

app.listen(5000, () => console.log("Server is running on http://localhost:5000"));