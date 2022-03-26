// src/controllers/produtoController.js - Arquivo responsável por controlar as ações referente aos verbos das requisições da rota /produtos
import produtos from '../models/Produto.js'

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

class ProdutoController{

  static listarProdutos = (req, res) => {
    produtos.find((err, produtos) => {
      if(!err){
        res.status(200).json(produtos)
      }else{
        res.status(400).json(buildMessage(err, 'Não foi possível localizar a lista de produtos!!!'))
      }
    })
  }

  static listarProdutoPorId = (req, res) => {
    const id = req.params.id

    produtos
      .findById(id)
      .exec((err, produtos) => {
        if(!err){
          res.status(200).json(produtos)
        }else{
          res.status(400).json(buildMessage(err, 'ID não encontrado na base de dados!!!'))
        }
      })
  }

  static listarProdutoPorFornecedor = (req, res) => {
    const fornecedor = req.query.fornecedor

    produtos.find({'fornecedor': fornecedor}, {}, (err, produtos) => {
      if(!err){
        res.status(200).json(produtos)
      }else{
        res.status(400).json(buildMessage(err, 'Não foi encontrado nenhum produto com esse fornecedor!!!'))
      }
    })
  }

  static cadastrarProduto = (req, res) => {
    let produto = new produtos(req.body)

    produto.save((err) => {
      if(!err){
        res.status(201).json(produto.toJSON())
      }else{
        res.status(500).json(buildMessage(err, 'falha ao cadastrar o produto'))
      }
    })
  }

  static atualizarProduto = (req, res) => {
    const id = req.params.id

    produtos.findByIdAndUpdate(id, {$set: req.body}, (err) => {
      if(!err){
        res.status(200).json(buildMessage(err, 'Produto atualizado com sucesso!!!'))
      }else{
        res.status(500).json(buildMessage(err, 'Erro ao atualizar o produto'))
      }
    })
  }

  static excluirProduto = (req, res) => {
    const id = req.params.id
    
    produtos.findByIdAndDelete(id, (err) => {
      if(!err){
        res.status(200).json(buildMessage(err, 'Produto removido com sucesso!!!'))
      }else{
        res.status(500).json(buildMessage(err, 'Não foi possível excluir o produto!!!'))
      }
    })
  }

}

export default ProdutoController