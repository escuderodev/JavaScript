import express, { json, Request, Response } from "express";

const app = express();

app.use(json());

app.get("/", (req: Request, res: Response) => {
    return res.status(200).json({message: "Bem vindo a minha API..."});
})

app.post("/client", (req: Request, res: Response) => {
    const body = req.body;
    console.log(body);
    return res.status(201).json({message: "Cliente cadastrado com sucesso!"});
})

app.listen(5000, () => console.log("Server is running on http://localhost:5000"));