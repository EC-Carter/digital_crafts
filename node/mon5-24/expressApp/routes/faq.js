const express = require('express');

const router = express.Router();

router.get('/faq',(req,res)=>{
    //res.send(`FAQ's`);
    res.render('faq');
})

module.exports = router;