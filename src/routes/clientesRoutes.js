// src/routes/clientesRoutes.js - Arquivo responsável por configurar todos os verbos referentes a rota /clientes
import express from 'express'

import controller from '../controllers/clienteController.js'

const router = express.Router()

router
  .get('/clientes', controller.listarClientes)
  .get('/clientes/:id', controller.listarClientePorId)
  .post('/clientes', controller.cadastrarCliente)
  .put('/clientes/:id', controller.atualizarCliente)
  .delete('/clientes/:id', controller.excluirCliente)


export default router