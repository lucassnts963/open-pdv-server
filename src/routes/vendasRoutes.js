// src/routes/vendasRoutes.js - Arquivo responsável por configurar todos os verbos referentes a rota /vendas
import express from 'express'

import controller from '../controllers/vendaController.js'

const router = express.Router()

router
  .get('/vendas', controller.listarVendas)
  .get('/vendas/:id', controller.listarVendaPorId)
  .post('/vendas', controller.cadastrarVenda)
  .put('/vendas/:id', controller.atualizarVenda)
  .delete('/vendas/:id', controller.excluirVenda)


export default router