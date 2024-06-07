const CarroService = require('../services/CarroService.js');

module.exports = {
    findAll: async (req, res) => {
        let json = {error:'', result:[]};
        let carros = await CarroService.findAll();

        for(let i in carros) {
            json.result.push({
                codigo: carros[i].codigo,
                descricao: carros[i].modelo,
                placa: carros[i].placa
            });
        }
        res.json(json);
    },

    findById: async (req, res) => {
        let json = {error:'', result:{}};

        let id = req.params.id;
        let carro = await CarroService.findById(id);

        if(carro) {
            json.result = carro;
        }
        res.json(json);
    },

    create: async (req, res) => {
        let json = {error:'', result:{}};

        let modelo = req.body.modelo;
        let placa = req.body.placa;

        if(modelo && placa) {
            let carro = await CarroService.create(modelo, placa);
            json.result = {
                message: 'Carro criado com sucesso!',
                codigo: carro,
                modelo,
                placa
            };
        } else {
            json.error = 'Todos os campos são obrigatórios!'
        }
        res.json(json);
    },

    update: async (req, res) => {
        let json = {error:'', result:{}};

        let id = req.params.id;
        let modelo = req.body.modelo;
        let placa = req.body.placa;

        if(id && modelo && placa) {
            let carro = await CarroService.update(id, modelo, placa);
            json.result = {
                message: "Carro atualizado com sucesso!",
                codigo: Number(id),
                modelo,
                placa
            };
        } else {
            json.error = 'Todos os campos são obrigatórios!'
        }
        res.json(json)
    },

    delete: async (req, res) => {
        let json = {error:'', result:{}};

        let id = req.params.id;
        await CarroService.delete(id);

        res.status(200).send('Carro deletado com sucesso!');
    }
}