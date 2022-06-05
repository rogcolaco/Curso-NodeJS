const express = require('express')
const app = express()

const path = require('path')
const basePath = path.join(__dirname,'templat')

// const checkAuth = function (req, res, next) {
//     req.authStatus = false

//     if(req.authStatus) {
//         console.log('Está logado pode continuar')
//         next()
//     } else {
//         console.log('Não está logado, faça login para continuar...')
//         next()
//     }
// }

const port = 3000

// app.use(checkAuth)

app.get('/users/:id', (req, res) => {
    const id = req.params.id

    //leitura de tabela e resgatar usuário do banco
    console.log(`Estamos buscando pelo usuário: ${id}`)
    res.sendFile(`${basePath}/users.html`)
})


app.get('/', (req, res) => {
    //res.send('Olá Mundo!!!')
    res.sendFile(`${basePath}/index.html`)
})

app.listen(port, () => {
    console.log(`App rodando na porta ${port}`)
})