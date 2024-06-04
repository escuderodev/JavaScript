import { autor } from "../models/Autor.js";
import livro from "../models/Livro.js";

class LivroController {

    static async findAllBooks(req, res) {
        try {
            const livros = await livro.find({});
            res.status(200).send(livros);
        } catch (error) {
            res.status(500).json({
                message: `${error.message} - Falha na requisição!`
            })
        }
    };

    static async findBookById(req, res) {
        try {
            const id = req.params.id;
            const book = await livro.findById(id);
            res.status(200).send(book);
        } catch (error) {
            res.status(500).json({
                message: `${error.message} - Livro não encontrado!`
            })
        }
    };

    static async createBook(req, res) {
        const newBook = req.body;

        try {
            const autorFound = await autor.findById(newBook.autor);
            const book = {...newBook, autor: {...autorFound._doc}};
            const createdBook = await livro.create(book);
            res.status(201).json({
                message: "Livro criado com sucesso!",
                livro: newBook
            });
        } catch (error) {
            res.status(500).json({
                message: `${error.message} - Falha ao cadastrar livro.`
            })
        }
    }

    static async updateBook(req, res) {
        try {
            const id = req.params.id;
            await livro.findByIdAndUpdate(id, req.body);
            res.status(200).send({
                message: "Livro atualizado com sucesso!"
            });
        } catch (error) { 
            res.status(500).json({
                message: `${error.message} - Livro não encontrado!`
            })
        }
    };

    static async deleteBook(req, res) {
        try {
            const id = req.params.id;
            await livro.findByIdAndDelete(id);
            res.status(200).send({
                message: "Livro deletado com sucesso!"
            });
        } catch (error) { 
            res.status(500).json({
                message: `${error.message} - Livro não encontrado!`
            })
        }
    };
};

export default LivroController;