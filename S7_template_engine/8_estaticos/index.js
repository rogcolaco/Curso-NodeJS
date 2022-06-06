const express = require('express')
const exphbs = require('express-handlebars')
const path = require('path')

const app = express()

const port = 3000

app.use('/static', express.static(__dirname + '/public'))

// const hbs = exphbs.create({
//     partialsDir: ['views/partials'],
// })

// app.engine('handlebars', hbs.engine())

app.engine(
    'handlebars',
    exphbs.engine({
        extname: "handlebars",
        defaultLayout: false,
        layoutsDir: "./views",
        partialsDir: './views/partials',
    })
);

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

app.get('/blog', (req, res) => {
    const posts = [
        {
            title: 'título 1',
            content: 'Conteúdo 1'
        },
        {
            title: 'título 2',
            content: 'Conteúdo 2'
        },
        {
            title: 'título 3',
            content: 'Conteúdo 3'
        },
        {
            title: 'título 4',
            content: 'Conteúdo 4'
        },
        {
            title: 'título 5',
            content: 'Conteúdo 5'
        },
    ]

    res.render('blog', {posts})
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
