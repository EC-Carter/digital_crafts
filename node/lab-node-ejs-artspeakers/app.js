

const express = require('express');
const app = express();
const socket = require('socket.io');
let port = 3000;

app.use(express.static('public'));
app.set('view engine','ejs');

//routes
app.use(require('./routes/index'));
app.use(require('./routes/speakers'));
app.use(require('./routes/feedback'));
app.use(require('./routes/chat'));



//server

let server = app.listen(port,()=>{
    console.log(`server running on port${port}`);
})

//
let io = socket(server);
io.on('connection',(socket) => {
    socket.on('postMessage', msg =>{
        io.emit('updateMessage',msg)
    })
})

