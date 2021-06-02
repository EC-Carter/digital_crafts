const prompt = require('prompt');
const fs = require('fs');

prompt.start();

prompt.get(["fileRead","fileWrite"], (error,result)=>{
    if(error){
        console.log(error.message);
        return;
    }
    fs.readFile(result.fileRead,(e,buffer)=>{
        if(e){
            console.log(e.message);
            return;
        }
        let contents = buffer.toString();
        let contUpper = contents.toUpperCase();
        fs.writeFile(result.fileWrite,contUpper,(err)=>{
            if(err){
                console.log(err.message);
                return;
            }
            console.log(`${result.fileWrite} has been saved.`);
        })

    })
});