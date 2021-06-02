//import express
const express = require('express');

//invoke express router
const router = express.Router();//allows us to subroute
let pictures = [
    "https://i.pinimg.com/originals/f4/01/0b/f4010b762ef1cd617f5e9a0a8ca0533a.jpg",
    "https://cdn.hpm.io/wp-content/uploads/2016/10/07162709/IMG_5206.jpg",
    "https://images.fineartamerica.com/images/artworkimages/mediumlarge/1/houston-skyline-from-above-tod-and-cynthia-grubbs.jpg"
]
let cities = [
    "Atlanta",
    "Houston",
    "Seattle",
    "Miami"
]

let array = [1,4,7,34,67,89,45];

let obj = {
    fName:"carol",
    lName:"carter"
}
//sub route
router.get('/',(req,res)=>{
    //res.send(`Home`);
    res.render('index',{
        pageTitle: "Home",
        content:"This is our Home page",
        myArray:array,
        isValid:false,
        myPics:pictures,
        pic: "",
        myName: obj,
        city:cities

    });//ejs is implied 
})

router.get('/cityInfo/:id',(req,res)=>{
    let id = req.params.id;

    res.render('index',{
        pageTitle: "Home",
        content:"This is our Home page",
        myArray:array,
        isValid:false,
        myPics: [],
        pic:pictures[id],
        myName: obj,
        city:cities[id]

    })
})



//export to main
module.exports = router;