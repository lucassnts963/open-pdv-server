// consoleColor.js - Arquivo para melhorar a visualização dos logs no console
import chalk from 'chalk'

export function logErro(mensagem){
  console.log(chalk.red(mensagem))
}

export function logSucesso(mensagem){
  console.log(chalk.green(mensagem))
}

export function logAviso(mensagem){
  console.log(chalk.yellow(mensagem))
}

export function erro(mensagem){
  return chalk.red(mensagem)
}

export function sucesso(mensagem){
  return chalk.green(mensagem)
}

export function aviso(mensagem){
  return chalk.yellow(mensagem)
}