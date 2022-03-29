// src/controllers/vendaController.js - Arquivo responsável por controlar as ações referente aos verbos das requisições da rota /vendas
import vendas from '../models/Venda.js'

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

class VendaController{

  static listarVendas = (req, res) => {
    vendas.find((err, vendas) => {
      if(!err){
        res.status(200).json(vendas)
      }else{
        res.status(400).json(buildMessage(err, 'Não foi possível localizar a lista de vendas!!!'))
      }
    })
  }

  static listarVendaPorId = (req, res) => {
    const id = req.params.id

    vendas
      .findById(id)
      .exec((err, vendas) => {
        if(!err){
          res.status(200).json(vendas)
        }else{
          res.status(400).json(buildMessage(err, 'ID não encontrado na base de dados!!!'))
        }
      })
  }

  static cadastrarVenda = (req, res) => {
    let venda = new vendas(req.body)

    venda.save((err) => {
      if(!err){
        res.status(201).json(venda.toJSON())
      }else{
        res.status(500).json(buildMessage(err, 'falha ao cadastrar o venda'))
      }
    })
  }

  static atualizarVenda = (req, res) => {
    const id = req.params.id

    vendas.findByIdAndUpdate(id, {$set: req.body}, (err) => {
      if(!err){
        res.status(200).json(buildMessage(err, 'Venda atualizado com sucesso!!!'))
      }else{
        res.status(500).json(buildMessage(err, 'Erro ao atualizar o venda'))
      }
    })
  }

  static excluirVenda = (req, res) => {
    const id = req.params.id
    
    vendas.findByIdAndDelete(id, (err) => {
      if(!err){
        res.status(200).json(buildMessage(err, 'Venda removido com sucesso!!!'))
      }else{
        res.status(500).json(buildMessage(err, 'Não foi possível excluir o venda!!!'))
      }
    })
  }

}

export default VendaController