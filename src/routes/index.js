// src/routes/index.js - Arquivo resposnável por configurar as rotas da API
import express from 'express'

import produtos from './produtosRoutes.js'

const routes = (app) => {
  app.route('/').get((req, res) => {
    res.status(200).json({message: 'API Funcionando'})
  })

  app.use(
    express.json(),
    produtos
  )
}

export default routes