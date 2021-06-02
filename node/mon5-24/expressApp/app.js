const express = require('express');
const app = express();
let port = 3000;

app.use(express.static('public'));
app.set('view engine','ejs');


// routes - handlers in their own files = modularized
app.use(require('./routes/'));//index implied
app.use(require('./routes/aboutus'));
app.use(require('./routes/faq'));
app.use(require('./routes/details'));

//server start
app.listen(port,()=>{
    console.log(`Server is running on port ${port}`);
})