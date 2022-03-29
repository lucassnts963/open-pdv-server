// src/routes/transacoesRoutes.js - Arquivo responsável por configurar todos os verbos referentes a rota /transacoes
import express from 'express'

import controller from '../controllers/transacaoController.js'

const router = express.Router()

router
  .get('/transacoes', controller.listarTransacoes)
  .get('/transacoes/:id', controller.listarTransacaoPorId)
  .post('/transacoes', controller.cadastrarTransacao)
  .put('/transacoes/:id', controller.atualizarTransacao)
  .delete('/transacoes/:id', controller.excluirTransacao)


export default router