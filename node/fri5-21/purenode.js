const http = require('http');
//set things up
const server = http.createServer((request, response)=>{
    switch(request.url){
        case '/':
            response.setHeader('Content-Type', 'text/html');
            response.end('<h1>Hello World</h1>')
            break;
        case '/aboutus':
            response.setHeader('Content-Type', 'text/html');
            let date = new Date();
            response.end(`<h1>About Us</h1><br>${date}`);
            break;
        case '/data':
            response.setHeader('Content-Type', 'application/json');
            //[{}, {}, {}]
            let students = [{fName: 'Brandon',
            city: 'Dallas'},
                {
                    fName: 'Jose',
                    city: 'Atlanta'
                },
                {
                    fName: 'Jacob',
                    city: 'Tampa'
                }];
                let studentsJSON = JSON.stringify(students);
                response.end(studentsJSON);
            break;
        default:
            response.setHeader('Content-Type', 'text/html');
            response.end(`You've reached an error`);
            break;
    }
})
//start server
server.listen(3000, ()=>{
    console.log(`Server is running on port 3000`);
})