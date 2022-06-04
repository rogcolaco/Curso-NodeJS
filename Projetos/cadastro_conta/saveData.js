const fs = require('fs')

module.exports = {
    saveUserData(contaUsuario, contaDados) {

        // if(!fs.existsSync('contas')){
        //     fs.mkdirSync('contas')
        // }

        fs.writeFile(`./contas/${contaUsuario}.txt`, JSON.stringify(contaDados), (err) => {
            if(err){
                console.log(err)
                return
            } })
    }
}