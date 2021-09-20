const a = require('./index')
const fs  = require('fs')
a('https://google.com').then(d =>{
    fs.writeFile('image2.png' , d , (err, data) => {})
})