const fs = require('fs');

fs.writeFile('node.txt','Node is fun!',(error)=>{
    if(error){
        console.log(error.message);
        return;
    }

    console.log(`File saved : node.txt`);
})

fs.readFile('indep.txt',(error, contents)=>{
    if(error){
        console.log(error.message);
        return;
    }
    console.log(`file contents: ${contents}`);
});