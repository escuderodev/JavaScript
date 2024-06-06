const CarroService = require('../services/CarroService.js');

module.exports = {
    findAll: async (req, res) => {
        let json = {error:'', result:[]};
        let carros = await CarroService.findAll();

        for(let i in carros) {
            json.result.push({
                codigo: carros[i].codigo,
                descricao: carros[i].modelo
            });
        }
        res.json(json);
    }
}