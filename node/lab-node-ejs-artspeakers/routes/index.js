const express = require('express');
const router = express.Router();
//get access to json data
let datafile = require('../data/data.json');

router.get('/',(req,res)=>{
    let pageSpeakers = datafile.speakers;//array of objects
    //array that holds all the artwork images
    let pagePhotos = [];
    pageSpeakers.forEach(speakerObj =>{
        pagePhotos = pagePhotos.concat(speakerObj.artwork);
    })
    
//send array that holds artwork to ejs file
    res.render('index',{
        artwork: pagePhotos,
        pageTitle: "Roux Meetups",
        pageID: "home",
    })
})

module.exports = router;