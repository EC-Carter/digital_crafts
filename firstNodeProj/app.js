const superH = require('superheroes');


const http = require('http');

const server = http.createServer((req,resp)=>{
    switch(req.url){
        case'/':
            let hero = superH.random();
            resp.setHeader('Content-Type','text/html');
            resp.end(`<h1>Here is a random hero: ${hero}</h1>`)
            break
        default:
            resp.setHeader('Content-Type','text/html');
            resp.end('You have reached an error');

            break;
    }

})

server.listen(3000,()=>{
    console.log('server is running on port 3000');
});
