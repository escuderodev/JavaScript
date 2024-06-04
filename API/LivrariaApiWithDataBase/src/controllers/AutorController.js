import { autor } from "../models/Autor.js";

class AutorController {

    static async findAll(req, res) {
        try {
            const autores = await autor.find({});
            res.status(200).send(autores);
        } catch (error) {
            res.status(500).json({
                message: `${error.message} - Falha na requisição!`
            })
        }
    };

    static async findById(req, res) {
        try {
            const id = req.params.id;
            const author = await autor.findById(id);
            res.status(200).send(author);
        } catch (error) {
            res.status(500).json({
                message: `${error.message} - Autor não encontrado!`
            })
        }
    };

    static async create(req, res) {
        try {
            const newAuthor = await autor.create(req.body);
            res.status(201).json({
                message: "Autor criado com sucesso!",
                autor: newAuthor
            });
        } catch (error) {
            res.status(500).json({
                message: `${error.message} - Falha ao cadastrar autor.`
            })
        }
    }

    static async update(req, res) {
        try {
            const id = req.params.id;
            await autor.findByIdAndUpdate(id, req.body);
            res.status(200).send({
                message: "Autor atualizado com sucesso!"
            });
        } catch (error) { 
            res.status(500).json({
                message: `${error.message} - Autor não encontrado!`
            })
        }
    };

    static async delete(req, res) {
        try {
            const id = req.params.id;
            await autor.findByIdAndDelete(id);
            res.status(200).send({
                message: "Autor deletado com sucesso!"
            });
        } catch (error) { 
            res.status(500).json({
                message: `${error.message} - Autor não encontrado!`
            })
        }
    };
};

export default AutorController;