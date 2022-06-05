const express = require('express')
const app = express()

const path = require('path')
const basePath = path.join(__dirname,'templat')

const port = 3000

app.get('/', (req, res) => {
    //res.send('Olá Mundo!!!')
    res.sendFile(`${basePath}/index.html`)
})

app.listen(port, () => {
    console.log(`App rodando na porta ${port}`)
})