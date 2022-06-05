const express = require('express')
const app = express()


const path = require('path')

//ler o body
app.use(
    express.urlencoded({
        extended:true
    }),
)

app.use(express.json())
//fim ler body

const basePath = path.join(__dirname,'templat')

const port = 3000


app.post('/users/save', (req, res) => {

    console.log(req.body)

    const nome = req.body.nome
    const idade = req.body.idade

    console.log(`O nome do usuário é ${nome} e ele tem ${idade} anos.`)
    res.sendFile(`${basePath}/createUser.html`)
})

app.get('/users/createUser', (req, res) => {
    res.sendFile(`${basePath}/createUser.html`)
})

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