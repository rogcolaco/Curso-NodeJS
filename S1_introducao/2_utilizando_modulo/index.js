const fs = require('fs') //File system

fs.readFile('arquivo.txt', 'utf-8', (err, data) => {

    if (err){
        console.log(err)
        return
    }

    console.log(data)
})