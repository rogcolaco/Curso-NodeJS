const x = 10
const y = '20'

//disparando exceções
if(!Number.isInteger(x)){
    throw new Error('Valor de x não é inteiro')
}

console.log('Continuando o código....')

try {
    y = 20
} catch (err) {
    console.log(`Erro: ${err}`)
}

console.log('Continuando o código....')