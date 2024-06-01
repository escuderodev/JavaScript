# ===== Criando uma API Rest com NodeJs =====

- crie uma pasta para o projeto
- inicie o projeto com o comando: npm init -y
- add abaixo da chave main o item: "type": "module"
- crie um servidor na raiz do projeto como: server.js
    - crie a const server
    - use o método listen passando a porta que será servida pelo server
- instale a lib Nodemon para que não haja a necessidade de reiniciar o server a cada alteração com o comando abaixo:
    - npm install nodemon@3.0.1
    - alterer no arquivo package.json o script dev para executar com o nodemom
- instale a framework Express com o comando: npm install express
- crie a pasta src
- dentro da pasta src crie o arquivo app.js que tera as nossas rotas
- neste arquivo, importe o express
- crie a const livros que será nosso banco de dados em memória
- ver passos de conexão em "DataBase MongoDB"
- 

## DataBase MongoDB
- criar o database no mongdb atlas
- instalar o driver do mongodb com o comando: npm install mongodb
- utilize a connection string do mongodb
- instalar a lib mongoose para poder conectar a api ao mongdb com o comando: npm install mongoose
- configurar a string de conexão com o mongoose
- criar a pasta config
- na pasta config, criar o arquivo dbConnect.js
- neste arquivo, importar o mongoose
- criar uma função assincrona conectaDB
- exportar conectaDB
- no arquivo app.js, importar o conectaDB
- no arquivo app.js, realizar a configuração de conexão conforme abaixo:
    - criar const conexao
    - utilizar os metodos conexao.on() e conexao.once()

