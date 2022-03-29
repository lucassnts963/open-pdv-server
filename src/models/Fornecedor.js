// src/models/Fornecedor.js - Arquivo representa a estrutura de um fornecedor dentro do sistema
import mongoose from 'mongoose'

const fornecedorSchema = mongoose.Schema(
  {
    id: {type: String},
    codigo: {type: String, required:true},
    nome_fantasia: {type: String, required:true},
    razao_social: {type: String, required:true},
    cnpj: {type: String, required:true},
  }
)

const fornecedores = mongoose.model('fornecedores', fornecedorSchema)

export default fornecedores