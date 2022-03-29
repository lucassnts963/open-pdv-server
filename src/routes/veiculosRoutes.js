// src/routes/veiculosRoutes.js - Arquivo responsável por configurar todos os verbos referentes a rota /veiculos
import express from 'express'

import controller from '../controllers/veiculoController.js'

const router = express.Router()

router
  .get('/veiculos', controller.listarVeiculos)
  .get('/veiculos/:id', controller.listarVeiculoPorId)
  .post('/veiculos', controller.cadastrarVeiculo)
  .put('/veiculos/:id', controller.atualizarVeiculo)
  .delete('/veiculos/:id', controller.excluirVeiculo)


export default router