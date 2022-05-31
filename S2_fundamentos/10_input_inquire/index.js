const inquirer = require('inquirer')

inquirer.prompt([
    {
        name: 'p1',
        message: 'Qual a primeira nota? '
    },
    {
        name: 'p2',
        message: 'Qual a segunda nota? '
    }
]).then((ansewers) => {
    console.log(ansewers)
    const media = ((parseInt(ansewers.p1)) + parseInt(ansewers.p2)) / 2
    console.log(`Média final = ${media}`)
}).catch(err => console.log(err))