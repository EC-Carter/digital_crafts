const express= require('express');
const app = express();
let port = 3000;

//middleware request=> handler app.use hijacks and does something first

//these two lines parse form data (string to usable data)
//req {body:{with form data inside as key value pairs}}
app.use(express.json());
app.use(express.urlencoded({extended:true}));

app.set('view engine', 'ejs');

//routes
app.get('/', (req,res)=>{
    res.render('index')
})

app.post('/',(req,res) => {
    console.log(req.body);
    let firstName = req.body.firstName;
    let password = req.body.password
    res.send(`<h1>form submitted</h1>
    first name : ${firstName}<br>
    password: ${password}<br>
    `)
})


//start server
app.listen(port,()=>{
    console.log(`listening on port ${port}`);
})