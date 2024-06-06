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
                codigo: carro,
                modelo,
                placa
            };
        } else {
            json.error = 'Todos os campos são obrigatórios!'
        }

        res.json(json);
    }
}