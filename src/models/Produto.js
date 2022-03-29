// src/models/Produto.js - Arquivo representa a estrutura de um produto dentro do sistema
import mongoose from 'mongoose'

const produtoSchema = mongoose.Schema(
  {
    id: {type: String},
    codigo: {type: String, required:true},
    descricao: {type: String, required:true},
    segmento: {type: String, required:true},
    marca: {type: String, required:true},
    und: {type: String, required:true},
    qtd: {type: String, required:true},
    custo: {type: Number, required:true},
    preco: {type: Number, required:true},
    encargos: {type: Number, required:true},
    fornecedor: {type: mongoose.Schema.Types.ObjectId, ref:'fornecedores', required: true},
    aplicacao: {type: Array}, // Aqui vai uma lista de veículos, a qual o produto é compatível
  }
)

const produtos = mongoose.model('produtos', produtoSchema)

export default produtos