const express = require('express')
const app = express()

const port = 3000

const usersRouter = require('./users/users')

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


//utiliza o arquivo de rotas
app.use('/users', usersRouter)


app.get('/', (req, res) => {
    //res.send('Olá Mundo!!!')
    res.sendFile(`${basePath}/index.html`)
})

app.listen(port, () => {
    console.log(`App rodando na porta ${port}`)
})