// src/controllers/fornecedorController.js - Arquivo responsável por controlar as ações referente aos verbos das requisições da rota /fornecedores
import fornecedores from '../models/Fornecedor.js'

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

class FornecedorController{

  static listarFornecedores = (req, res) => {
    fornecedores.find((err, fornecedores) => {
      if(!err){
        res.status(200).json(fornecedores)
      }else{
        res.status(400).json(buildMessage(err, 'Não foi possível localizar a lista de fornecedores!!!'))
      }
    })
  }

  static listarFornecedorPorId = (req, res) => {
    const id = req.params.id

    fornecedores
      .findById(id)
      .exec((err, fornecedores) => {
        if(!err){
          res.status(200).json(fornecedores)
        }else{
          res.status(400).json(buildMessage(err, 'ID não encontrado na base de dados!!!'))
        }
      })
  }

  static cadastrarFornecedor = (req, res) => {
    let fornecedor = new fornecedores(req.body)

    fornecedor.save((err) => {
      if(!err){
        res.status(201).json(fornecedor.toJSON())
      }else{
        res.status(500).json(buildMessage(err, 'falha ao cadastrar o fornecedor'))
      }
    })
  }

  static atualizarFornecedor = (req, res) => {
    const id = req.params.id

    fornecedores.findByIdAndUpdate(id, {$set: req.body}, (err) => {
      if(!err){
        res.status(200).json(buildMessage(err, 'Fornecedor atualizado com sucesso!!!'))
      }else{
        res.status(500).json(buildMessage(err, 'Erro ao atualizar o fornecedor'))
      }
    })
  }

  static excluirFornecedor = (req, res) => {
    const id = req.params.id
    
    fornecedores.findByIdAndDelete(id, (err) => {
      if(!err){
        res.status(200).json(buildMessage(err, 'Fornecedor removido com sucesso!!!'))
      }else{
        res.status(500).json(buildMessage(err, 'Não foi possível excluir o fornecedor!!!'))
      }
    })
  }

}

export default FornecedorController