// src/models/Venda.js - Arquivo representa a estrutura de um venda dentro do sistema
import mongoose from 'mongoose'

const vendaSchema = mongoose.Schema(
  {
    id: {type: String},
    produtos: {type: Array, required:true}, // Lista de produtos com sua respectiva quantidade {produtoID: "jkhskjfhsuihiusdfhius", qtde: 3}
    cliente: {type: mongoose.Schema.Types.ObjectId, ref: 'clientes', required:true},
    total: {type: Number, required:true},
    data: {type: Date, required:true},
    forma_pagamento: {type: String, required: true}, // Cartão de Crédito, Débito, Dinheiro, Pix
  }
)

const vendas = mongoose.model('vendas', vendaSchema)

export default vendas