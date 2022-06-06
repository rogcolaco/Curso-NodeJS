const express = require('express')
const exphbs = require('express-handlebars')

const app = express()

const port = 3000

app.engine('handlebars', exphbs.engine())

// app.engine(
//     'handlebars',
//     exphbs.engine({
//         extname: "handlebars",
//         defaultLayout: false,
//         layoutsDir: "./views"
//     })
// );

app.set('view engine', 'handlebars')

app.get('/login', (req, res) => {

    const cadastro = {
        name: 'Rogério',
        idade: 36,
        lastName: 'Colaço',
        city: 'São Carlos'
    }

    res.render('login', {cadastro})
})

app.get('/dashboard', (req, res) => {
    const itens = [
        'item 1',
        'item 2',
        'item 3',
        'item 4',
        'item 5',
    ]
    res.render('dashboard', {itens})
})

app.get('/', (req, res) => {

    const user = {
        name: 'Rogério',
        idade: 36,
    }

    var palavra = 'Enviando String através de variável!!!!'

    var auth = user.idade>=18 ? true : false

    res.render('home', {user, palavra, auth})
})

app.listen(port, () => {
    console.log(`Rodando na porta ${port}`)
})
