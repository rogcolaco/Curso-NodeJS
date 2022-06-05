const express = require('express')
const router = express.Router()

const path = require('path')
const basePath = path.join(__dirname,'../html-templates')

router.get('/', (req, res) => {
    //res.send('Olá Mundo!!!')
    res.sendFile(`${basePath}/rota.html`)
})

module.exports = router;