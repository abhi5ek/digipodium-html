const express = require("express");

const router = express.Router();

//addblog
router.get('/addblog',(req,res) => {
    res.send("Respone from blog addblog");
});

//getbyid
router.get('/getbyid',(req,res) => {
    res.send("Respone from blog getbyid");
});

//getall
router.get('/getall',(req,res) => {
    res.send("Respone from blog getall");
});

module.exports = router;