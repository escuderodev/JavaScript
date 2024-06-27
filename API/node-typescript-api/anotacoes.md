# === ANOTAÇÕES IMPORTANTES ===

- iniciar  projeto com =>  npm init -y
- instalar dependencias: typescript, ts-node e ts-node-dev => npm i -D typescript ts-node-dev
- na raiz no projeto, criar arquivo index.ts
- configurar package.json para rodar o projeto como dev => "dev": "ts-node-dev index.ts"
- criar arquivo de configuração do typescript => npx tsc --init
- criar pasta src e mover o arquivo index.ts para dentro dela
- antes de criar o script build devemos acessar o arquivo tsconfig.json e add  algumas propriedades como abaixo:
    -  no final do arquivo incluir o include
          "include": ["src"]
    - procurar por ourDir, descomentar e alterar da seguinte forma => "outDir": "./build",   
- em package.json, criar o script build => "build": "tsc"
- para buildar o projeto basta digitar no terminal o comando => npm run build
- em package.json, criar o script start => "start": "node src/index.ts"
- para executar a app em modo produção basta digitar no terminal => npm run start
- obs: sempre que uma alterar for realizada nos arquivos .ts, antes de rodar em produção, devemos fazer o build
- 