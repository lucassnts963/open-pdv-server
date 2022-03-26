// src/routes/fornecedoresRoutes.js - Arquivo responsável por configurar todos os verbos referentes a rota /fornecedores
import express from 'express'

import controller from '../controllers/fornecedorController.js'

const router = express.Router()

router
  .get('/fornecedores', controller.listarFornecedores)
  .get('/fornecedores/:id', controller.listarFornecedorPorId)
  .post('/fornecedores', controller.cadastrarFornecedor)
  .put('/fornecedores/:id', controller.atualizarFornecedor)
  .delete('/fornecedores/:id', controller.excluirFornecedor)


export default router