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
- crie rotas 