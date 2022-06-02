const fs = require('fs')

if(!fs.existsSync('./minhaPasta')){
    console.log('pasta não existe')
    fs.mkdirSync('minhaPasta')
} else if(fs.existsSync('./minhaPasta')){
    console.log('pasta existe')
}