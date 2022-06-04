//import select from '@inquirer/select';
const inquirer = require('inquirer')
const saveData = require('./saveData')
const fs = require('fs')

module.exports = {

    saudacaoSaida() {
        console.log('Obrigado por utilizar os serviços do nosso gerenciador de contas')
    },

    criarConta() {
        inquirer.prompt([{
            name: 'nomeConta',
            message: 'Informe o nome da nova conta: '
        }]).then((answer) => {
            var nomeDaConta = answer.nomeConta

            let contaData = {
                0: {
                    nome: nomeDaConta,
                    saldo: 0
                }
            }
            saveData.saveUserData(nomeDaConta, contaData)
        })
    },

    consultaSaldo(nomeDaConta) {
        fs.readFile(`./contas/${nomeDaConta}.txt`, (err, data) => {

            if (data === undefined) throw new Error('Conta não encontrada!!! ')
            let saldo = JSON.parse(data)[0]['saldo']
            console.log(`Saldo na conta: R$ ${saldo}`)
        })
    },

    deposito(nomeDaConta) {
        inquirer.prompt([{
            name: 'valorDeposito',
            message: 'Informe o valor do deposito: '
        }]).then((answer) => {
            fs.readFile(`./contas/${nomeDaConta}.txt`, (err, data) => {

                if (data === undefined) throw new Error('Conta não encontrada!!! ')
                if(isNaN(answer.valorDeposito)) throw new Error('Valor inválido!!! ')
    
                let dados = JSON.parse(data)[0]

                dados.saldo+=parseFloat(answer.valorDeposito)
                let contaDados = {
                    0: {
                        'nome':dados.nome,
                        'saldo':dados.saldo
                    }
                }
                saveData.saveUserData(nomeDaConta, contaDados)
                console.log('Depósito realizado com sucesso!!!')
            })

        }).catch((err) => {
            console.log(err)
        })
    },

    retirada(nomeDaConta) {
        inquirer.prompt([{
            name: 'valorRetirada',
            message: 'Informe o valor da retirada: '
        }]).then((answer) => {
            fs.readFile(`./contas/${nomeDaConta}.txt`, (err, data) => {

                if (data === undefined) throw new Error('Conta não encontrada!!! ')
                if(isNaN(answer.valorRetirada)) throw new Error('Valor inválido!!! ')
    
                let dados = JSON.parse(data)[0]

                if(dados.saldo < answer.valorRetirada){
                    console.log('Saldo insuficiente para efetivar a operação')
                    this.consultaSaldo(nomeDaConta)
                    return
                }

                dados.saldo-=parseFloat(answer.valorRetirada)
                let contaDados = {
                    0: {
                        'nome':dados.nome,
                        'saldo':dados.saldo
                    }
                }
                saveData.saveUserData(nomeDaConta, contaDados)
                console.log('Retirada realizada com sucesso!!!')
            })

        }).catch((err) => {
            console.log(err)
        })
    },

    buscarConta(userAnswer) {
        inquirer.prompt([{
            name: 'nomeConta',
            message: 'Informe o nome da conta: '
        }]).then((answer) => {

            if (userAnswer === 'Consultar Saldo') {
                var nomeDaConta = answer.nomeConta
                this.consultaSaldo(nomeDaConta)
            } else if ( userAnswer === 'Fazer um depósito'){
                var nomeDaConta = answer.nomeConta
                this.deposito(nomeDaConta)
            } else if ( userAnswer === 'Fazer uma retirada'){
                var nomeDaConta = answer.nomeConta
                this.retirada(nomeDaConta)
            }

        }).catch((err) => {
            console.log(err)
        })
    },

    mainMenu() {
        inquirer
            .prompt([
                /* Pass your questions in here */
                {
                    type: 'list',
                    name: 'mainQuestions',
                    message: 'O que gostaria de fazer?',
                    choices: ['Criar uma conta',
                        'Consultar Saldo',
                        'Fazer um depósito',
                        'Fazer uma retirada',
                        'Sair'],
                }
            ])
            .then((answer) => {
                let userAnswer = answer.mainQuestions
                if (userAnswer === 'Criar uma conta') {
                    this.criarConta()
                    saveData.saveUserData('teste')
                } else if (userAnswer === 'Consultar Saldo') {
                    this.buscarConta(userAnswer)
                } else if (userAnswer === 'Fazer um depósito') {
                    this.buscarConta(userAnswer)
                } else if (userAnswer === 'Fazer uma retirada') {
                    this.buscarConta(userAnswer)
                }
                else if (userAnswer === 'Sair') {
                    this.saudacaoSaida()
                }
            })
            .catch((error) => {
                if (error.isTtyError) {
                    // Prompt couldn't be rendered in the current environment
                } else {
                    // Something else went wrong
                }
            });
    }
}