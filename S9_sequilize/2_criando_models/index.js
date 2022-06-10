const express = require('express')
const exphbs = require('express-handlebars')
const conn = require('./db/conn')

//Importação de modelos para tabelas
const User = require('./models/User')

const app = express()
const port = 3000

app.use(
    express.urlencoded({
        extended:true
    })
)

app.use(express.json())

app.engine('handlebars', exphbs.engine())
app.set('view engine', 'handlebars')

app.use(express.static('public'))

app.get('/', (req, res) => {
    res.render('home')
})

conn.sync().then( () => {
    app.listen(port)
}).catch(err => console.log(err))