require('dotenv').config({path:".env"}); //permite ler as variáveis de ambiente
const express = require('express'); //framework para trabalhar com servidores http
const cors = require('cors'); //habilita requisições externas
const bodyParser = require('body-parser'); //permite converter o body para diversos formatos

const routes = require('./routes'); //apontamento para o arquivo de routes

const server = express(); //instãncia do express
server.use(cors());
server.use(bodyParser.urlencoded({extended: false}));
server.use('/api', routes)

server.listen(process.env.PORT, () => {
    console.log(`Server rodando em: http://localhost:${process.env.PORT}`);
})