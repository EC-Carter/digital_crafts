const express = require('express');
const router = express.Router();

let datafile = require('../data/data.json');
let pageSpeakers = datafile.speakers;//array of objects

router.get('/speakers',(req,res)=>{
    let pagePhotos = [];
    pageSpeakers.forEach(speakerObj=>{
        pagePhotos = pagePhotos.concat(speakerObj.artwork);
    })
    res.render('speakers',{
        artwork:pagePhotos,
        pageTitle: "Roux Meetups- Speakers",
        pageID: 'speakers',
        speakers:pageSpeakers,
    })
})

router.get('/speakers/:speakerid',(req,res)=>{
    let individualart = [];
    let speakers = [];
    pageSpeakers.forEach(speaker =>{
        if(speaker.shortname == req.params.speakerid){
            individualart = speaker.artwork;
            speakers.push(speaker)
        }
    })
    res.render('speakers',{
        artwork: individualart,
        speakers:speakers,
        pageTitle: `Roux Meetups - ${speakers[0].name}`,
        pageID: 'speakerDetail',

    })
    //note artwork key same for both routes, if not it would cause errors
})

module.exports = router;