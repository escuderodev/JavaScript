const db = require('../db.js');

module.exports = {
    findAll: () => {
        return new Promise((aceito, rejeitado) => {
            db.query('select * from carros', (error, results) => {
                if(error) {rejeitado(error); return;}
                aceito(results);
            });
        });
    },

    findById: (id) => {
        return new Promise((aceito, rejeitado) => {
            db.query('select * from carros where codigo = ?', [id], (error, results) => {
                if(error) {rejeitado(error); return;}
                if(results.length > 0) {
                    aceito(results[0]);
                } else {
                    aceito(false);
                }
            });
        });
    },

    create: (modelo, placa) => {
        return new Promise((aceito, rejeitado) => {
            db.query('insert into carros (modelo, placa) values (?, ?)', [modelo, placa], (error, results) => {
                if(error) {rejeitado(error); return;}
                aceito(results.insertId);
                
            });
        });
    }
};