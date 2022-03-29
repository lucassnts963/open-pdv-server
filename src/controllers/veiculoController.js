// src/controllers/veiculoController.js - Arquivo responsável por controlar as ações referente aos verbos das requisições da rota /veiculos
import veiculos from '../models/Veiculo.js'

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

class VeiculoController{

  static listarVeiculos = (req, res) => {
    veiculos.find((err, veiculos) => {
      if(!err){
        res.status(200).json(veiculos)
      }else{
        res.status(400).json(buildMessage(err, 'Não foi possível localizar a lista de veiculos!!!'))
      }
    })
  }

  static listarVeiculoPorId = (req, res) => {
    const id = req.params.id

    veiculos
      .findById(id)
      .exec((err, veiculos) => {
        if(!err){
          res.status(200).json(veiculos)
        }else{
          res.status(400).json(buildMessage(err, 'ID não encontrado na base de dados!!!'))
        }
      })
  }

  static cadastrarVeiculo = (req, res) => {
    let veiculo = new veiculos(req.body)

    veiculo.save((err) => {
      if(!err){
        res.status(201).json(veiculo.toJSON())
      }else{
        res.status(500).json(buildMessage(err, 'falha ao cadastrar o veiculo'))
      }
    })
  }

  static atualizarVeiculo = (req, res) => {
    const id = req.params.id

    veiculos.findByIdAndUpdate(id, {$set: req.body}, (err) => {
      if(!err){
        res.status(200).json(buildMessage(err, 'Veiculo atualizado com sucesso!!!'))
      }else{
        res.status(500).json(buildMessage(err, 'Erro ao atualizar o veiculo'))
      }
    })
  }

  static excluirVeiculo = (req, res) => {
    const id = req.params.id
    
    veiculos.findByIdAndDelete(id, (err) => {
      if(!err){
        res.status(200).json(buildMessage(err, 'Veiculo removido com sucesso!!!'))
      }else{
        res.status(500).json(buildMessage(err, 'Não foi possível excluir o veiculo!!!'))
      }
    })
  }

}

export default VeiculoController