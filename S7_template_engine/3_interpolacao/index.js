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

app.get('/', (req, res) => {

    const user = {
        name: 'Rogério',
        idade: 36,
    }

    var palavra = 'Enviando String através de variável!!!!'

    res.render('home', {user, palavra})
})

app.listen(port, () => {
    console.log(`Rodando na porta ${port}`)
})
