// src/controllers/transacaoController.js - Arquivo responsável por controlar as ações referente aos verbos das requisições da rota /transacoes
import transacoes from '../models/Transacao.js'

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

class TransacaoController{

  static listarTransacoes = (req, res) => {
    transacoes.find((err, transacoes) => {
      if(!err){
        res.status(200).json(transacoes)
      }else{
        res.status(400).json(buildMessage(err, 'Não foi possível localizar a lista de transacoes!!!'))
      }
    })
  }

  static listarTransacaoPorId = (req, res) => {
    const id = req.params.id

    transacoes
      .findById(id)
      .exec((err, transacoes) => {
        if(!err){
          res.status(200).json(transacoes)
        }else{
          res.status(400).json(buildMessage(err, 'ID não encontrado na base de dados!!!'))
        }
      })
  }

  static cadastrarTransacao = (req, res) => {
    let transacao = new transacoes(req.body)

    transacao.save((err) => {
      if(!err){
        res.status(201).json(transacao.toJSON())
      }else{
        res.status(500).json(buildMessage(err, 'falha ao cadastrar o transacao'))
      }
    })
  }

  static atualizarTransacao = (req, res) => {
    const id = req.params.id

    transacoes.findByIdAndUpdate(id, {$set: req.body}, (err) => {
      if(!err){
        res.status(200).json(buildMessage(err, 'Transacao atualizado com sucesso!!!'))
      }else{
        res.status(500).json(buildMessage(err, 'Erro ao atualizar o transacao'))
      }
    })
  }

  static excluirTransacao = (req, res) => {
    const id = req.params.id
    
    transacoes.findByIdAndDelete(id, (err) => {
      if(!err){
        res.status(200).json(buildMessage(err, 'Transacao removido com sucesso!!!'))
      }else{
        res.status(500).json(buildMessage(err, 'Não foi possível excluir o transacao!!!'))
      }
    })
  }

}

export default TransacaoController