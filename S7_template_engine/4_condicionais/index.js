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

    res.render('login')
})

app.get('/dashboard', (req, res) => {
    res.render('dashboard')
})

app.get('/', (req, res) => {

    const user = {
        name: 'Rogério',
        idade: 5,
    }

    var palavra = 'Enviando String através de variável!!!!'

    var auth = user.idade>=18 ? true : false

    res.render('home', {user, palavra, auth})
})

app.listen(port, () => {
    console.log(`Rodando na porta ${port}`)
})
