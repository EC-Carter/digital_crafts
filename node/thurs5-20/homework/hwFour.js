const prompt = require('prompt');
const fs = require('fs');
const fetch = require('node-fetch');

prompt.start();

prompt.get(["url","fileWrite"], (error,result)=>{
    if(error){
        console.log(error.message);
        return;
    }
    fetch(result.url)
    .then(res => res.text())
    .then(body => {
        fs.writeFile(result.fileWrite,body,(err)=>{
            if(err){
                console.log(err.message);
                return;
            }
            console.log(`${result.fileWrite} has been saved.`);
        })

    })
    .catch(err => console.error(err.message));
    
    
});
