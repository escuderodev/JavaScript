import express from "express";
import LivroController from "../controllers/LivroController.js";

const routes = express.Router();

routes.get("/livros", LivroController.findAllBooks);
routes.get("/livros/:id", LivroController.findBookById);
routes.post("/livros", LivroController.createBook);
routes.put("/livros/:id", LivroController.updateBook);
routes.delete("/livros/:id", LivroController.deleteBook);

export default routes;