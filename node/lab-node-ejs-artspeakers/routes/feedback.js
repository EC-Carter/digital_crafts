const express = require('express');
const router = express.Router();
//allows us to read and write to a file
let feedbackData = require('../data/feedback.json');//require converts this to a js object
const fs = require('fs');


//for req.body.variable
router.use(express.json());
router.use(express.urlencoded({extended:true}));


//this route renders the page
router.get('/feedback',(req,res) => {
    res.render('feedback',{
        pageTitle:"Roux Meetups - Feedback Form",
        pageID:"feedback",
    })
})

//this route takes the form data in and works with it
router.post('/api',(req,res) => {
    //grab data that was sent from form
    //the next three lines V are unneeded because req.body already has it
    //let name = req.body.name;
    //let title = req.body.title;
    //let message = req.body.message;
    feedbackData.unshift(req.body);
    //write it to json file
    // v pure node 
    fs.writeFile('data/feedback.json',JSON.stringify(feedbackData), 'utf8',(err)=>{
        if(err){
            console.log(err);
        }
    })
    //send back all messages with new message
    res.json(feedbackData);
})

//This route is so our front end can make fetch call and get all the feedback from the json file
router.get('/api',(req,res) => {
    //display messages from feedback
    //console.log(feedbackData);
    res.json(feedbackData)
})

module.exports = router;