const express = require('express');
const router = express.Router();

router.get('/chat',(req,res) => {
    
    res.render('chat',{
        pageID: "chat",
        pageTitle: "Roux Chat"
    })
})
module.exports = router;