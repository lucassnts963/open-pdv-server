# open-pdv-server
API REST, para alimentar um sistema de Ponto de Vendas (PDV), controle de estoque e fluxo de caixa. O sistema tem como publico alvo lojas de peças de motos e bicicletas. Objetivando disponibilizar esse software de forma livre.

# Configurando o projeto

Necessário criar um arquivo default.json na pasta config localizada na raiz do projeto semelhante o descrito abaixo:
<code>
{
  "server": {
    "port": "<port>",
    "host": "<host>"
  },
  "mongoDB": {
    "uri": "mongodb+srv://<user>:<password>@open-pdv.brzvz.mongodb.net/<nameDB>",
    "user": "<user>",
    "password": "<password>",
    "nameDB": "<nameDB>"
  }
}
</code>


