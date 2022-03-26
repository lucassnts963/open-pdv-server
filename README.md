# open-pdv-server
API REST, para alimentar um sistema de Ponto de Vendas (PDV), controle de estoque e fluxo de caixa. O sistema tem como publico alvo lojas de peças de motos e bicicletas. Objetivando disponibilizar esse software de forma livre.

# Teconoligias utilizadas

- MongoDB
- NodeJS

# Depedências

- express
- mongoose
- chalk
- config

# Configurando o projeto

Necessário criar um arquivo default.json na pasta config localizada na raiz do projeto semelhante o descrito abaixo:
```json
{
  "server": {
    "port": "port",
    "host": "localhost"
  },
  "mongoDB": {
    "uri": "mongodb+srv://<user>:<password>@open-pdv.brzvz.mongodb.net/<nameDB>",
    "user": "<user>",
    "password": "<password>",
    "nameDB": "<nameDB>"
  }
}
```

# Modelagem do banco de dados

O banco de dados escolhido para o projeto foi o MongoDB Atlas a versão gratuita.

## Coleções de dados

- produtos
- clientes
- usuarios
- fornecedores
- veiculos

### Produtos

Itens cadastrados para serem vendidos seguindo a estrutura de dados abaixo:

- id
- codigo
- descricao
- segmento
- marca
- und
- qtd
- custo
- preco
- encargos
- fornecedor
- aplicacao
  - Esse item é pra cadastrar quais modelos de motos que o item é compatível


