const express = require('express')
const app = express()

const port = 5000

const path = require('path')
const basePath = path.join(__dirname,'html-templates')

const router = require('./router/index')

//arquivos estaticos
app.use(express.static('public'))


//utiliza o arquivo de rotas
app.use('/rota', router)

app.get('/', (req, res) => {
    //res.send('Olá Mundo!!!')
    res.sendFile(`${basePath}/index.html`)
})

app.listen(port, () => {
    console.log(`App rodando na porta ${port}`)
})