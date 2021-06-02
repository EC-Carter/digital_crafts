const express = require('express');
const router = express.Router();

//so that we can use json req.body any data that goes in and out will be json format
//allows us to scrape from the header
router.use(express.json());
router.use(express.urlencoded({extended:true}));

//create data to use - faux database 
let db = {
    checking:200,
    savings:1500,
    transactions:[{
        type:"savings/deposit",
        amount:245,
        date:(new Date()).toLocaleString()
    }
    ,{
        type:"checking/deposit",
        amount:123,
        date:(new Date()).toLocaleString()
    }]
}


//creates banking route
// http://localhost:3000/banking
router.get('/banking',(req,res) => {
    res.render('banking');
});
//shows checking balance as json
//http://localhost:3000/checkingbalance
router.get('/checkingbalance',(req,res) => {
    res.json({checking: db.checking})
})
//shows savings balance as json
//http://localhost:3000/savingsbalance
router.get('/savingsbalance',(req,res) => {
    res.json({savings: db.savings})
})

//gets information from user and updates db object
//http://localhost:3000/depositchecking
router.post('/depositchecking',(req,res) => {
    let transType = req.body.transType;
    let amount = parseFloat(req.body.amount);
    if(transType === "savings/deposit"){
        db.savings = db.savings + amount;
    }
    else if (transType === "checking/deposit"){
        db.checking = db.checking + amount;

    }
    let transaction = {
        type:transType,
        amount: amount,
        date:(new Date()).toLocaleString()
    }
    db.transactions.push(transaction);

    res.json({transactions:db.transactions})

})



module.exports = router;