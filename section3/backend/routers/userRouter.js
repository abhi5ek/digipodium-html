const express = require("express");
const Model = require('../models/userModel');

const router = express.Router();

router.post('/add', (req, res) => {
    res.send('Response from user add');
});

// getall
router.get('/getall', (req, res) => {
    res.send('Response from user getall');
});

// getbyid
router.get('/getbyid', (req, res) => {
    res.send('Response from user getbyid');
});

// delete
router.get('/delete', (req, res) => {
    res.send('Response from user delete');
});

// upadte
router.get('/update', (req, res) => {
    res.send('Response from user update');
});

module.exports = router;
