// src/models/Venda.js - Arquivo representa a estrutura de um transacao dentro do sistema
import mongoose from 'mongoose'

const transacaoSchema = mongoose.Schema(
  {
    id: {type: String},
    descricao: {type: String, required: true},
    valor: {type: Number, required:true},
    data: {type: Date, required:true},
    tipo: {type: String, required: true}
  }
)

const transacoes = mongoose.model('transacoes', transacaoSchema)

export default transacoes