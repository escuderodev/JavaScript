import express from "express";

const app = express();

const livros = [
    {
        id: 1,
        titulo: "Casamento Blindado",
        autor: "Renato Cardoso"
    },
    {
        id: 2,
        titulo: "Nos passos de Jesus",
        autor: "Edir Macedo"
    }
]

app.get("/", (req, res) => {
    res.status(200).send("Criando uma API com Node.js")
});

app.get("/livros", (req, res) => {
    res.status(200).send(livros)
});

export default app;