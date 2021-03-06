# Open PDV (API REST)
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
- vendas
- transacoes

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

### Fornecedor
- id
- codigo
- nome_fantasia
- razao_social
- cnpj

### Cliente
- id
- codigo
- nome
- cpf
- data_nascimento
- cidade
- cep
- bairro
- logradouro
- complemento
- numero
- email
- celular

### Usuários
- id
- codigo
- nome
- cpf
- data_nascimento
- cidade
- cep
- bairro
- logradouro
- complemento
- numero
- email
- celular
- login
- senha

### Veículo
Pode ser utilizado no futuro o conceito de herança? Como?
- id
- codigo
- tipo (MOTO, CARRO, BIKE)
- nome
- cilindradas (uma opção pode ser "não se aplica")
- marca
- ano

### Vendas
- id
- produtos
- cliente
- total
- data
- forma_pagamento

### Transações
Aqui pode haver uma despesa ou uma receita que não seja venda de produtos
- id
- descricao
- valor
- data
- tipo (entrada ou saída / receita ou despesa)


