// src/controllers/usuarioController.js - Arquivo responsável por controlar as ações referente aos verbos das requisições da rota /usuarios
import usuarios from '../models/Usuario.js'

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

class UsuarioController{

  static listarUsuarios = (req, res) => {
    usuarios.find((err, usuarios) => {
      if(!err){
        res.status(200).json(usuarios)
      }else{
        res.status(400).json(buildMessage(err, 'Não foi possível localizar a lista de usuarios!!!'))
      }
    })
  }

  static listarUsuarioPorId = (req, res) => {
    const id = req.params.id

    usuarios
      .findById(id)
      .exec((err, usuarios) => {
        if(!err){
          res.status(200).json(usuarios)
        }else{
          res.status(400).json(buildMessage(err, 'ID não encontrado na base de dados!!!'))
        }
      })
  }

  static cadastrarUsuario = (req, res) => {
    let usuario = new usuarios(req.body)

    usuario.save((err) => {
      if(!err){
        res.status(201).json(usuario.toJSON())
      }else{
        res.status(500).json(buildMessage(err, 'falha ao cadastrar o usuario'))
      }
    })
  }

  static atualizarUsuario = (req, res) => {
    const id = req.params.id

    usuarios.findByIdAndUpdate(id, {$set: req.body}, (err) => {
      if(!err){
        res.status(200).json(buildMessage(err, 'Usuario atualizado com sucesso!!!'))
      }else{
        res.status(500).json(buildMessage(err, 'Erro ao atualizar o usuario'))
      }
    })
  }

  static excluirUsuario = (req, res) => {
    const id = req.params.id
    
    usuarios.findByIdAndDelete(id, (err) => {
      if(!err){
        res.status(200).json(buildMessage(err, 'Usuario removido com sucesso!!!'))
      }else{
        res.status(500).json(buildMessage(err, 'Não foi possível excluir o usuario!!!'))
      }
    })
  }

}

export default UsuarioController