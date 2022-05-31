const inquirer = require('inquirer')
const chalk = require('chalk')

inquirer.prompt([
    {
        name: 'nome',
        message: 'Infome seu nome: '
    },
    {
        name: 'idade',
        message: 'Informe sua idade: '
    }
]).then((ansewers) => {
    if(!Number.isNaN(ansewers.idade)){
        throw new Error('Não foi informada uma idade válida')
    }
    console.log(chalk.bgYellow.black(`   O nome do usuário é ${ansewers.nome} e sua idade é ${ansewers.idade} anos.`))
}).catch(err => console.log(err))