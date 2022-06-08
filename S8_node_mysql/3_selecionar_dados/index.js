const express = require('express')
const exphbs = require('express-handlebars')
const mysql = require('mysql')

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

//Cria novos livros e cadastra
app.post('/books/insertbook', (req, res) => {

    const title = req.body.title
    const pages = req.body.pages

    const sql = `INSERT INTO books (Title, Pages) VALUES ('${title}','${pages}')`

    conn.query(sql, function(err) {
        if (err) {
            console.log(err)
            return
        }

        res.redirect('/')
    })

})

//resgata dados
app.get('/books', (req, res) => {

    const sql = 'Select * from books'

    conn.query(sql, function (err, data) {
        
        if (err) {
            console.log(err)
            return
        }

        const books = data
        //console.log(books)

        res.render('books', {books})
        
    })

})

const conn = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'admin123',
    database:'nodemysql'
})

conn.connect( function (err){
    if (err) console.log(err)

    console.log('Conectou ao MySQL!!!')

    app.listen(port)
})