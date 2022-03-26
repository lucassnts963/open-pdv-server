// src/config/dbConnect.js - Arquivo de configuração do Banco de Dados (MongoDB)
import config from 'config'
import mongoose from 'mongoose'

function getURI(){
  const user = config.get('mongoDB.user')
  const password = config.get('mongoDB.password')
  const nameDB = config.get('mongoDB.nameDB')
  const uriBase = config.get('mongoDB.uri')

  const uri = uriBase
    .replace('<user>', user)
    .replace('<password>', password)
    .replace('<nameDB>', nameDB)

  return uri
}

mongoose.connect(getURI())

let db = mongoose.connection

export default db