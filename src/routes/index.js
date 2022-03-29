// src/routes/index.js - Arquivo resposnável por configurar as rotas da API
import express from 'express'

import produtos from './produtosRoutes.js'
import fornecedores from './fornecedoresRoutes.js'
import clientes from './clientesRoutes.js'
import usuarios from './usuariosRoutes.js'
import veiculos from './veiculosRoutes.js'

const routes = (app) => {
  app.route('/').get((req, res) => {
    res.status(200).json({message: 'API Funcionando'})
  })

  app.use(
    express.json(),
    produtos,
    fornecedores,
    clientes,
    usuarios,
    veiculos
  )
}

export default routes