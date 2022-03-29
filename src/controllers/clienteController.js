// src/controllers/clienteController.js - Arquivo responsável por controlar as ações referente aos verbos das requisições da rota /clientes
import clientes from '../models/Cliente.js'

/**
 * 
 * @param {Error} err - representa o erro recebido da conexão ao banco de dados
 * @param {String} message - mensagem personalizada para incluir na mensagem final
 * @returns Object{message: 'Aqui vai uma mensagem'}
 */
const buildMessage = (err, message = 'Algo de Errado aconteceu!!!') => {
  if(err){
    return {message: `${err.message} - ${message}`}
  }else{
    return {message: message}
  }
}

class ClienteController{

  static listarClientes = (req, res) => {
    clientes.find((err, clientes) => {
      if(!err){
        res.status(200).json(clientes)
      }else{
        res.status(400).json(buildMessage(err, 'Não foi possível localizar a lista de clientes!!!'))
      }
    })
  }

  static listarClientePorId = (req, res) => {
    const id = req.params.id

    clientes
      .findById(id)
      .exec((err, clientes) => {
        if(!err){
          res.status(200).json(clientes)
        }else{
          res.status(400).json(buildMessage(err, 'ID não encontrado na base de dados!!!'))
        }
      })
  }

  static cadastrarCliente = (req, res) => {
    let cliente = new clientes(req.body)

    cliente.save((err) => {
      if(!err){
        res.status(201).json(cliente.toJSON())
      }else{
        res.status(500).json(buildMessage(err, 'falha ao cadastrar o cliente'))
      }
    })
  }

  static atualizarCliente = (req, res) => {
    const id = req.params.id

    clientes.findByIdAndUpdate(id, {$set: req.body}, (err) => {
      if(!err){
        res.status(200).json(buildMessage(err, 'Cliente atualizado com sucesso!!!'))
      }else{
        res.status(500).json(buildMessage(err, 'Erro ao atualizar o cliente'))
      }
    })
  }

  static excluirCliente = (req, res) => {
    const id = req.params.id
    
    clientes.findByIdAndDelete(id, (err) => {
      if(!err){
        res.status(200).json(buildMessage(err, 'Cliente removido com sucesso!!!'))
      }else{
        res.status(500).json(buildMessage(err, 'Não foi possível excluir o cliente!!!'))
      }
    })
  }

}

export default ClienteController