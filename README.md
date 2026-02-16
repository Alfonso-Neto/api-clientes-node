## Como instalar NVM?
Para instalar NVM deve-se rodar o comando:
> curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.7/install.sh | bash
Depois recarregar o shell através do comando:
> source ~/.bashrc
E então verificar a versão com o comando:
> nvm --version
 
## Como instalar Node
Para instalar o Node rode o comando:
> nvm install --lts Para instalar a versão LTS
Depois definir versão padrão através do comando:
> nvm alias default lts/*
Verificar as versões por meio dos comandos: 
> node -v
> npm -v

## Como rodar projeto
Primeiro deve-se clonar o repositório através do comando:
git clone https://github.com/Alfonso-Neto/api-clientes-node.git

## Estrutura de pastas
A estrutura de pastas do atual projeto segue da seguinte forma:
src/
 ├── app.js                -> Configuração do Express e Swagger
 ├── server.js             -> Inicialização do servidor
 ├── routes/
 │    └── clientes.js      -> Rotas da API
 ├── controllers/
 │    └── clientes.controller.js
 ├── services/
 │    └── clientes.services.js
 ├── database/
 │    └── prisma.js        -> Prisma Client
 └── prisma/
      ├── schema.prisma    -> Schema do banco
      └── migrations/      -> Histórico de migrations
docs/
README.md
package.json

## Como rodar migrations
Para rodar as migrations deve se utilizar o seguinte comando:
> npx prisma migrate dev --name nome_da_migration
> Gerar o prisma client com o comando: npx prisma generate

## Como acessar Swagger
Para acessar o swagger, primeiro deve-se executar o servidor.
Digite o comando npm run dev no terminal, após isso, dentro do terminal deve aparecer: Servidor rodando em: (localhost)
Acesse o link e acesse o diretório: api-clientes-node. Exemplo de link localhost:http://localhost:5000/api-clientes-node

