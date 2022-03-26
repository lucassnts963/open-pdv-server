// src/routes/produtosRoutes.js - Arquivo responsável por configurar todos os verbos referentes a rota /produtos
import express from 'express'

import controller from '../controllers/produtoController.js'

const router = express.Router()

router
  .get('/produtos', controller.listarProdutos)
  .get('/produtos/busca', controller.listarProdutoPorFornecedor)
  .get('/produtos/:id', controller.listarProdutoPorId)
  .post('/produtos', controller.cadastrarProduto)
  .put('/produtos/:id', controller.atualizarProduto)
  .delete('/produtos/:id', controller.excluirProduto)


export default router