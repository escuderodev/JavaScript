import express, { json, Request, Response } from "express";

const dbInMemory = [
    {
        name: "Eduardo Escudero",
        fone: "11955005284",
        email: "escuderodev@gmail.com",
        restriction: "Intolerância a Lactose"
    },
];

export class ClientController {
    createClient = (req: Request, res: Response) => {
        const client = req.body;
        dbInMemory.push(client);
        console.log(dbInMemory);
        return res.status(201).json({message: "Cliente cadastrado com sucesso!",});
    }
}