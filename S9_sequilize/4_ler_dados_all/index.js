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

app.post('/users/create', async (req, res) => {
    const name = req.body.name
    const occupation = req.body.occupation
    let newsletter = req.body.newsletter

    newsletter = newsletter === 'on' ? true : false

    await User.create({
        name,
        occupation,
        newsletter
    })

    res.redirect('/')
})

app.get('/users/create', (req, res) => {
    res.render('adduser')
})

app.get('/', async (req, res) => {
    
    const users = await User.findAll({
        raw: true
    })
    
    // console.log(users)

    res.render('home', {users})
})

conn.sync().then( () => {
    app.listen(port)
}).catch(err => console.log(err))