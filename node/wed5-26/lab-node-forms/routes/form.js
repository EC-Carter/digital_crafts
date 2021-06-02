const express = require("express");
const router = express.Router();

router.use(express.json());
router.use(express.urlencoded({ extended: true}));

router.get("/form", (req, res) => {
  res.render("form");
});
router.get("/login", (req, res) => {
  res.render("form");
});

router.post("/login", (req, res) => {
    let username = req.body.username;
    let password = req.body.password;

  res.send(`
  
  <h1>Successfully Submitted</h1>
  <p>username and password successfully submitted</p>
  
  <b>username:</b> ${username} <br/>
  <b>password:</b> ${password}
  `);
});

module.exports = router;