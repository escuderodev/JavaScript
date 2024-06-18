# === ANOTAÇÕES IMPORTANTES ===

- instalar yarn => npm install --global yarn
- iniciar o projeto com yarn => yarn init -y
- instalar o express => yarn add express
- intalar typescript e ts-node-dev => yarn dev typescript ts-node-dev -D
- criar  arquivo de configuração do typescript => yarn tsc --init
- consigurar o arquivo tsconfig.json
- criar pasta src
- criar arquivo server.ts
- criar app.ts
- add tipagem express => yarn add @types/express -D
- no arquivo app.ts, criar as linhas abaixo:
    import express from "express"
    const app = express()
    app.use(express.json())
    export { app }
- importar app em server.ts
- definir listem => app.listen(3333)
- criar aquivo router.ts
- importar em router o express
- instanciar o router => const router = Router()
- criar as rotas
- em app.ts, definir => app.use(router)
- instalar uuidv4 => yarn add uuidv4
- criar pasta useCases
- dentro de useCases, criar pasta para cada caso de uso
- criar dentro da pasta do caso de uso os arquivos class, controller, DTO e Spec
- em src, criar pasta repository
- criar arquivo repository
- criar métodos de interação com o banco no repository
- implementar DTO
- criar código do useCase no arquivo class
- devemos criar a pasta Providers sempre que houver a necessidade de se conectar com algum recurso externo
- em providers, criar a arquivo responsável por consumir o recurso externo
- no caso de uso, fazer uso do nosso provider
- implementar controller
- criar pasta Implementations dentro de repository e providers
- instalar nodemailer => yarn add nodemailer
- instalar tipagem nodemailer => yarn add @types/nodemailer -D
- implementar provider
- implementar repository
- na pasta CreateUser que está em useCases, criar um arquivo index.ts para conectar a implementação do Postgres e MailTrap com as Interfaces
- ajustar routes 
