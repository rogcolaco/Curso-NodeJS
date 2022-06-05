const express = require('express')
const router = express.Router()

const path = require('path')
const basePath = path.join(__dirname,'../templat')

router.post('/save', (req, res) => {

    console.log(req.body)

    const nome = req.body.nome
    const idade = req.body.idade

    console.log(`O nome do usuário é ${nome} e ele tem ${idade} anos.`)
    res.sendFile(`${basePath}/createUser.html`)
})

router.get('/createUser', (req, res) => {
    res.sendFile(`${basePath}/createUser.html`)
})

router.get('/:id', (req, res) => {
    const id = req.params.id

    //leitura de tabela e resgatar usuário do banco
    console.log(`Estamos buscando pelo usuário: ${id}`)
    res.sendFile(`${basePath}/users.html`)
})

module.exports = router