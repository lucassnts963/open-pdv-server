// src/routes/produtosRoutes.js - Arquivo responsável por configurar todos os verbos referentes a rota /produtos
import express from 'express'

import ProdutoController from '../controllers/produtoController.js'

const router = express.Router()

router
  .get('/produtos', ProdutoController.listarProdutos)
  .get('/produtos/busca', ProdutoController.listarProdutoPorFornecedor)
  .get('/produtos/:id', ProdutoController.listarProdutoPorId)
  .post('/produtos', ProdutoController.cadastrarProduto)
  .put('/produtos/:id', ProdutoController.atualizarProduto)
  .delete('/produtos/:id', ProdutoController.excluirProduto)


export default router