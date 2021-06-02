const express = require('express');
const app = express();
let port = 3000;
//handler
app.get('/',(req,res) => {
    res.send(`<h1>Hello World</h1>`);
})
app.get('/cats',(req,res) => {
    res.send(`<h1>Meow</h1>`);
})
app.get('/dogs',(req,res) => {
    res.send(`<h1>Woof</h1>`);
})
app.get('/cats_and_dogs',(req,res) => {
    res.send(`<h1>Living together</h1>`);
})
app.get('/greet/:person',(req,res) => {
    let person = req.params.person
    res.send(`<h3>Hello ${person}</h3>`);
})

app.get('/age',(req,res) => {
    let date = new Date();
    let year = date.getFullYear();
    let age = req.query.age;
    res.send(`You were born in ${year - age}`);
    
})


//server start
app.listen(port,()=>{
    console.log(`Server is running on port ${port}`);
})
