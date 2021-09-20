# S-SS
- Site-ScreenShot
- Screen Shot From Any URL
- Made Using Puppeteer 
# Usage
- Very Easy To Use!!
```js
const ss = require('s-ss')
const fs  = require('fs')
ss('https://google.com').then(d =>{
    fs.writeFile('image.png' , d , (err, data) => {})
})
```
[![Pic]](./image2.png)