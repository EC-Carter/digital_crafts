
const express = require('express');
const router = express.Router();
const axios = require('axios');

router.get('/details',async(req,res)=>{
    
    let data = await axios.get('https://corona.lmao.ninja/v2/states')
    
        //res.json(data.data);
    res.render('details',{
            virus:data.data,
            virusState:""
        });


    
})
router.get('/details/:state',async(req,res)=>{
    let state = req.params.state;
    let data= await axios.get(`https://corona.lmao.ninja/v2/states/${state}`)
   
        //res.json(data.data);
        //console.log(data.data);
        res.render('details',{
            virus:"",
            virusState:data.data
        });

})

module.exports = router;