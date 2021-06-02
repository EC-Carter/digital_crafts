const express = require('express');
const app = express();
const socket = require('socket.io')
const port = 3000;

app.use(express.static('public'));
app.set('view engine', 'ejs');

app.get('/',(req,res) => {
    res.render('index');
})


//we have to take our server and pass it into the socket

let server = app.listen(port,() => {
    console.log(`listening on port ${port}`)
})

let io = socket(server);
//on is the event listener
// v this is listening for clients that connect via websockets
io.on('connection',(socket) => {
    console.log(`client connected`);
    //as soon as client connects they see v message
    socket.emit('chatMessage',{msg:"hello from the other side"})
    //listen
    socket.on('msgFromClient',(msgClient) => {//listening for incoming chat message
        
        io.emit('msgFromServer',msgClient)//broadcasts back out to all clients
    })
})