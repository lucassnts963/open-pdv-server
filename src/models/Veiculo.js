// src/models/Veiculo.js - Arquivo representa a estrutura de um veiculo dentro do sistema
import mongoose from 'mongoose'



const veiculoSchema = mongoose.Schema(
  {
    id: {type: String},
    codigo: {type: String, required:true},
    nome: {type: String, required:true},
    marca: {type: String, required:true},
    tipo: {type: String, required:true},
    cilindradas: {type: Number, required:true},
    ano: {type: Number, required:true},
  }
)

const veiculos = mongoose.model('veiculos', veiculoSchema)

export default veiculos