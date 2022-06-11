const express = require('express')
const exphbs = require('express-handlebars')

const app = express()
const port = 3000

const conn = require('./db/conn')

/*IMPORTAÇÃO DOS MODELOS/TABELAS*/
const Task =  require('./Models/Task')

app.engine('handlebars', exphbs.engine())
app.set('view engine', 'handlebars')

app.use(
    express.urlencoded({
        extended:true
    })
)

app.use(express.json())

app.use(express.static('public'))

conn.sync()
.then( () => {
    app.listen(port)
})
.catch((err) => console.log(err))