// src/routes/usuariosRoutes.js - Arquivo responsável por configurar todos os verbos referentes a rota /usuarios
import express from 'express'

import controller from '../controllers/usuarioController.js'

const router = express.Router()

router
  .get('/usuarios', controller.listarUsuarios)
  .get('/usuarios/:id', controller.listarUsuarioPorId)
  .post('/usuarios', controller.cadastrarUsuario)
  .put('/usuarios/:id', controller.atualizarUsuario)
  .delete('/usuarios/:id', controller.excluirUsuario)


export default router