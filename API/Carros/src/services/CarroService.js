const db = require('../db.js');

module.exports = {
    findAll: () => {
        return new Promise((aceito, rejeitado) => {
            db.query('select * from carros', (error, results) => {
                if(error) {rejeitado(error); return;}
                aceito(results);
            });
        });
    }
};