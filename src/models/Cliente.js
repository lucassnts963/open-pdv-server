// src/models/Cliente.js - Arquivo representa a estrutura de um cliente dentro do sistema
import mongoose from 'mongoose'


const clienteSchema = mongoose.Schema(
  {
    id: {type: String},
    codigo: {type: String, required:true},
    nome: {type: String, required:true},
    cpf: {type: String}, // TODO: Criar validador de cpf ou usar alguma biblioteca existente
    data_nascimento: {type: Date},
    // Endereço pode ser um model diferente com todas informações necessárias
    cidade: {type: String},
    cep: {type: String, required: true},
    bairro: {type: String},
    logradouro: {type: String},
    numero: {type: Number},
    //Aqui termina as informações do endereço
    email: {type: String}, // TODO: Criar validador de email ou utilizar alguma biblioteca existente
    celular: {type: String} // TODO: Fazer um model para celular, colocar se ele é zap? qual operadora? DDD? dentre outras coisas...
  }
)

const clientes = mongoose.model('clientes', clienteSchema)

export default clientes