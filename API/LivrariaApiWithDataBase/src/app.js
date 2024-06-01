import express from "express";
import conectaDB from "./config/dbConnect.js";

const conexao = await conectaDB();
conexao.on("error", (erro) => {
    console.error("Erro de conexão!", erro);
});
conexao.once("open", () => {
    console.log("Conexão realizada com sucesso!");
});

const app = express();
app.use(express.json());

function buscarLivroPorId(id) {
    return livros.findIndex(livro => {
        return livro.id === Number(id);
    })
}

app.get("/", (req, res) => {
    res.status(200).send("Criando uma API com Node.js");
});

app.get("/livros", (req, res) => {
    res.status(200).send(livros);
});

app.get("/livros/:id", (req, res) => {
    const index = buscarLivroPorId(req.params.id);
    res.status(200).json(livros[index]);
});

app.post("/livros", (req, res) => {
    livros.push(req.body);
    res.status(201).send("Livro cadastrado com sucesso!");
})

app.put("/livros/:id", (req, res) => {
    const index = buscarLivroPorId(req.params.id);
    livros[index].titulo = req.body.titulo
    livros[index].autor = req.body.autor
    res.status(200).json(livros[index]);
});

app.delete("/livros/:id", (req, res) => {
    const index = buscarLivroPorId(req.params.id);
    livros.splice(index, 1);
    res.status(200).send("Livro deletado com sucesso!");
})

export default app;