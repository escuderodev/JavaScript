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
- 
