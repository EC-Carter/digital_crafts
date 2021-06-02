const prompt = require('prompt');
const fs = require('fs');

prompt.start();

prompt.get(['fileName'],(err,result)=>{
    if(err){
        console.log(err.message);
        return;
    }
    fs.readFile(result.fileName, (error,buffer)=>{
        if(error){
            console.log(error.message);
            return;
        }
        let text = buffer.toString();
        console.log(text.toUpperCase());
    })

})

