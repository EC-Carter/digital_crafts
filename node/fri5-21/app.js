const express = require('express');
const app = express();
let port = 3000;
app.use(express.static('public'));
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
let data = {data: [{
                    id: 0,
                    name: "Golden Retriever",
                    img: "https://www.gannett-cdn.com/presto/2020/02/07/USAT/4a2add44-2e03-41a8-ba02-722c8044d711-VPC_GOLDEN_RETRIEVER_TENNIS_BALLS_DESK_THUMB.jpg?quality=10"
                },
                {
                    id: 1,
                    name: "Lab",
                    img: "https://upload.wikimedia.org/wikipedia/commons/3/34/Labrador_on_Quantock_%282175262184%29.jpg"
                },
                {
                    id: 2,
                    name: "pug",
                    img: "https://live.staticflickr.com/3095/3140892215_7fcba48323_b.jpg"
                },
                {
                    id: 3,
                    name: "poodle",
                    img: "https://s3.amazonaws.com/ogden_images/www.morningjournalnews.com/images/2020/02/12231125/best-in-show-1-1100x733.jpg"
                }
                ]}

let nav = `
<link rel="stylesheet" href="/styles/styles.css">

<ul>
    <li><a href ="/dogs/0">Golden Retriever</a></li>
    <li><a href ="/dogs/1">Lab</a></li>
    <li><a href ="/dogs/2">Pug</a></li>
    <li><a href ="/dogs/3">Poodle</a></li>

</ul>
`;
// handler
app.get('/',(req,res)=>{
    res.send(`<h1>Hello World - Express</h1>`);
})
app.get('/dogs', (req,res) => {
    res.send(`${nav}`)
})

app.get('/dogs/:id',(req,res) => {
    let id = req.params.id;
    res.send(`${nav} <h1>${data.data[id].name}</h1><br><img src="${data.data[id].img}" height="300px">
    `)
})

app.get('/aboutus',(req,res)=>{
    let date = new Date();
    let userName = req.query.name;
    res.send(`<h1>About Us: ${userName}</h1><br>${date}`);
})
app.get('/contact/:id',(req,res) => {
    let id = req.params.id;
    
    res.send(`<h2>contact: ${id}</h2>`)
})
app.get('/add/:num/:num2',(req,res) => {
    let num1 = req.params.num;
    let num2 = req.params.num2;
    res.send(`<h2>${num1} + ${num2} = ${parseInt(num1) + parseInt(num2)}</h2>`)
})

app.get('/data',(req,res)=>{
    res.json(students);
})

app.get('/cats?',(req,res) => {
    res.send('cats')
})

app.get('/puppies',(req,res) => {
    res.send('puppies')
})

app.get('/contact',(req,res) => {
    res.send('contact')
})

app.get('*',(req,res) => {
    res.send(`You have reached an error`)
})

app.listen(port,()=>{
    console.log(`Server is running on port ${port}`);
})