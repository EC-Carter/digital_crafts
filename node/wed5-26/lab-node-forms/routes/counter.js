const express = require("express");
const router = express.Router();

let count = 3;

router.get('/counter', (req,res)=>{
    res.render('counter');
})

router.get('/api/counter',(req, res)=>{
    res.json({value:count})
})


router.post('/api/counter',(req,res) => {
    count++;
    res.json({value:count,
    status:'incremented'})
})

router.put('/api/counter',(req,res) => {
    count--;
    res.json({value:count,
        status:'decrmented'})
})

router.delete('/api/counter',(req,res) => {
    count = 0;
    res.json({value:count,
        status:'reset'})

})
module.exports = router;