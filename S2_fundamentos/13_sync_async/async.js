const fs = require('fs')

console.log('Início')

fs.writeFile('arquivo2.txt', 'oi', (err) => {
    setTimeout( () => {
        console.log('Arquivo criado')
    }, 2000)
})

console.log('fim')