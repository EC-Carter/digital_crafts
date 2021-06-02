const fetch = require('node-fetch');
const fs = require('fs');
const gm = require('gm');

fetch( "https://raw.githubusercontent.com/voodootikigod/logo.js/master/js.png")
.then((image)=>{
    fs.writeFile('js.png',image,(err)=>{
        if(err){
            console.log(err.message);
            return;
        }
        console.log(`js.png has been saved.`);
    })
})
