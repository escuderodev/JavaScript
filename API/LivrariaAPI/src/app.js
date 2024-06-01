import express from "express";

const app = express();

app.get("/", (req, res) => {
    res.status(200).send("Criando uma API com Node.js")
});

app.get("/livros", (req, res) => {
    res.status(200).send("Vocẽ está na rota livros")
});

app.get("/autores", (req, res) => {
    res.status(200).send("Você está na rota autores")
});

export default app;