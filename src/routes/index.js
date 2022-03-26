// src/routes/index.js - Arquivo resposnável por configurar as rotas da API
import express from 'express'

const routes = (app) => {
  app.route('/').get((req, res) => {
    res.status(200).json({message: 'API Funcionando'})
  })

  app.use(
    express.json()
  )
}

export default routes