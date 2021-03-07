const express = require('express');
const router = express.Router();
const burger = require('../models/burger.js');

// Create all our routes and set up logic within those routes where required.
router.get('/', (req, res) => {
    burger.selectAll((data) => {
        // if (err) throw err;
        console.log({ burgers: data }); 
        res.render('index', { burgers: data }); 
    });
});

router.post('/api/burgers', (req, res) => {
    console.log("here"); 
    burger.create(['burgers'], [req.body.burger_name], (result) => {
        res.redirect('/'); 
});
});

// router.put('/api/burgers/:id', (req, res) => {

// });

// router.delete('/api/burgers/:id', (req, res) => {

// });

module.exports = router;