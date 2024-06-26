import express, { json, Request, Response } from "express";
import { ClientService } from "../services/ClientService";

const clientService = new ClientService();

export class ClientController {

    findAll =  (req: Request, res: Response) => {
        const clientList = clientService.findAll();
        return res.status(200).json(clientList);
    }
    
    create = (req: Request, res: Response) => {
        const client = req.body;

        if(!client.name) {
            return res.status(400).json({message: 'Bad Request => The name field is required!'})
        } else if(!client.fone) {
            return res.status(400).json({message: 'Bad Request => The fone field is required!'})
        } else if(!client.email) {
            return res.status(400).json({message: 'Bad Request => The email field is required!'})
        } else if(!client.restriction) {
            return res.status(400).json({message: 'Bad Request => The restriction field is required!'})
        }

        clientService.create(client.name, client.fone, client.email, client.restriction);
        return res.status(201).json({message: "Cliente cadastrado com sucesso!",});
    }
}