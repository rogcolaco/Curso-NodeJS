const fs = require('fs')

module.exports = {
    saveUserData(contaUsuario, contaDados) {
        fs.writeFile(`./contas/${contaUsuario}.txt`, JSON.stringify(contaDados), (err) => {
            if(err){
                console.log(err)
                return
            } })
    }
}