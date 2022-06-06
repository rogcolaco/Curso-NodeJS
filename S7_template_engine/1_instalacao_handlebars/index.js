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
    res.render('home', {layout:false})
})

app.listen(port, () => {
    console.log(`Rodando na porta ${port}`)
})
