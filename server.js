// server.js - Arquivo principal do servidor
import config from 'config'

import app from './src/app.js'

const port = process.env.PORT || config.get('server.port')
const host = config.get('server.host')

app.listen(port, () => {
  console.log(`Servidor rodando em http://${host}:${port}`)
})