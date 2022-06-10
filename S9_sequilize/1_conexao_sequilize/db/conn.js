const { Sequelize } = require('sequelize')

const sequelize = new Sequelize (
    'nodesequelize',
    'root',
    'admin123', {
        host: 'localhost',
        dialect: 'mysql'
    }
)

try {
    sequelize.authenticate()
    console.log('Conectado Sequelize')

} catch (err) {
    console.log('Não foi possível conectar: ', err)
}

module.exports = sequelize