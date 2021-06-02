const express = require("express");
const router = express.Router();

router.use(express.json());
router.use(express.urlencoded({ extended: true}));


router.get("/contact", (req, res) => {
  res.render('contact')
});

router.post("/contact",(req,res) => {
  let name = req.body.name;
  let email = req.body.email;
  let phone = req.body.phone;
  let website = req.body.website;
  let message = req.body.message;

  res.render('/success',{
    name,
    email,
    phone,
    website,
    message,


  })
})


module.exports = router;