const prompt = require('prompt');
const dns = require('dns');


prompt.start();

prompt.get(['url'],(err,result)=>{
    if(err){
        console.log(err.message);
        return;
    }
    dns.lookup(result.url,(error,address,family)=>{
        if(error){
            console.log(error.message);
            return;
        }
        console.log(`IP address: ${address}`);
    })
    

})