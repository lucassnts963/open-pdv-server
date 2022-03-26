// src/app.js - Arquivo cria uma estância do express
import express from 'express'

import { erro, logSucesso } from './utils/consoleColor.js'
import db from './config/dbConnect.js'
import routes from './routes/index.js'

//Conexão com o MongoDB
db.on('error', console.log.bind(console, erro('Erro de conexão ao MongoDB')))
db.once('open', () => {
  logSucesso('Conexão ao MongoDB realizada com sucesso!!!')
})

const app = express()
routes(app)

export default app