const { Sequelize } = require('sequelize')

const sequelize = new Sequelize('nodemvc', 'root', 'admin123', {
    host: 'localhost',
    dialect: 'mysql'
})

try {

    sequelize.authenticate()
    console.log('Conectado ao MySQL!!!')

} catch(err) {
    console.log('Não foi possível conectar: ', err)
}

exports.default = sequelize