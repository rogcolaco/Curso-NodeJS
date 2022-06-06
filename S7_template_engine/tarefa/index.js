const express = require('express')
const exphbs = require('express-handlebars')


const app = express()

const port = 5000

app.engine(
    'handlebars',
    exphbs.engine({
        extname: "handlebars",
        defaultLayout: false,
        layoutsDir: "./views",
        partialsDir: './views/partials',
    })
);

app.set('view engine', 'handlebars');

app.use(express.static('public'));

app.get('/:id', (req, res) => {
    const id = req.params.id

    const produtoDetalhes =
        {
            1: {
                nome: 'Produto 1',
                preco: 52.20,
                descricao: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus varius massa et nibh tempus, ac lobortis augue semper. Suspendisse potenti. Fusce eget turpis lectus. Phasellus eu malesuada augue. Morbi nec neque eu magna congue hendrerit. Duis ac ultrices nulla. Proin vel maximus lectus, id lacinia massa.'
            },
            2: {
                nome: 'Produto 2',
                preco: 30,
                descricao: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus varius massa et nibh tempus, ac lobortis augue semper. Suspendisse potenti. Fusce eget turpis lectus. Phasellus eu malesuada augue. Morbi nec neque eu magna congue hendrerit. Duis ac ultrices nulla. Proin vel maximus lectus, id lacinia massa.'    
            },
            3: {
                nome: 'Produto 3',
                preco: 5.20,
                descricao: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus varius massa et nibh tempus, ac lobortis augue semper. Suspendisse potenti. Fusce eget turpis lectus. Phasellus eu malesuada augue. Morbi nec neque eu magna congue hendrerit. Duis ac ultrices nulla. Proin vel maximus lectus, id lacinia massa.'
            },
            4: {
                nome: 'Produto 4',
                preco: 22.65,
                descricao: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus varius massa et nibh tempus, ac lobortis augue semper. Suspendisse potenti. Fusce eget turpis lectus. Phasellus eu malesuada augue. Morbi nec neque eu magna congue hendrerit. Duis ac ultrices nulla. Proin vel maximus lectus, id lacinia massa.'
            },
            5: {
                nome: 'Produto 5',
                preco: 50,
                descricao: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus varius massa et nibh tempus, ac lobortis augue semper. Suspendisse potenti. Fusce eget turpis lectus. Phasellus eu malesuada augue. Morbi nec neque eu magna congue hendrerit. Duis ac ultrices nulla. Proin vel maximus lectus, id lacinia massa.'
            },
            6: {
                nome: 'Produto 6',
                preco: 1.99,
                descricao: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus varius massa et nibh tempus, ac lobortis augue semper. Suspendisse potenti. Fusce eget turpis lectus. Phasellus eu malesuada augue. Morbi nec neque eu magna congue hendrerit. Duis ac ultrices nulla. Proin vel maximus lectus, id lacinia massa.'    
            },
        }

    const detalhes = produtoDetalhes[id]
    res.render('detalhes', {detalhes})
})

app.get('/', (req, res) => {

    const produtos = [
        {
            id:1,
            nome: 'Produto 1',
            preco: 52.20,
            descricao: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus varius massa et nibh tempus, ac lobortis augue semper. Suspendisse potenti. Fusce eget turpis lectus. Phasellus eu malesuada augue. Morbi nec neque eu magna congue hendrerit. Duis ac ultrices nulla. Proin vel maximus lectus, id lacinia massa.'
        },
        {
            id:2,
            nome: 'Produto 2',
            preco: 30,
            descricao: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus varius massa et nibh tempus, ac lobortis augue semper. Suspendisse potenti. Fusce eget turpis lectus. Phasellus eu malesuada augue. Morbi nec neque eu magna congue hendrerit. Duis ac ultrices nulla. Proin vel maximus lectus, id lacinia massa.'
        },
        {
            id:3,
            nome: 'Produto 3',
            preco: 5.20,
            descricao: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus varius massa et nibh tempus, ac lobortis augue semper. Suspendisse potenti. Fusce eget turpis lectus. Phasellus eu malesuada augue. Morbi nec neque eu magna congue hendrerit. Duis ac ultrices nulla. Proin vel maximus lectus, id lacinia massa.'
        },
        {
            id:4,
            nome: 'Produto 4',
            preco: 22.65,
            descricao: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus varius massa et nibh tempus, ac lobortis augue semper. Suspendisse potenti. Fusce eget turpis lectus. Phasellus eu malesuada augue. Morbi nec neque eu magna congue hendrerit. Duis ac ultrices nulla. Proin vel maximus lectus, id lacinia massa.'
        },
        {
            id:5,
            nome: 'Produto 5',
            preco: 50,
            descricao: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus varius massa et nibh tempus, ac lobortis augue semper. Suspendisse potenti. Fusce eget turpis lectus. Phasellus eu malesuada augue. Morbi nec neque eu magna congue hendrerit. Duis ac ultrices nulla. Proin vel maximus lectus, id lacinia massa.'
        },
        {
            id:6,
            nome: 'Produto 6',
            preco: 1.99,
            descricao: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus varius massa et nibh tempus, ac lobortis augue semper. Suspendisse potenti. Fusce eget turpis lectus. Phasellus eu malesuada augue. Morbi nec neque eu magna congue hendrerit. Duis ac ultrices nulla. Proin vel maximus lectus, id lacinia massa.'
        },
    ]

    res.render('home', {produtos})
})

app.listen(port, () => {
    console.log(`Rodando na porta ${port}`)
})