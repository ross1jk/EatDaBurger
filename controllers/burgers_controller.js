const express = require('express');
const router = express.Router();
const burger = require('../models/burger.js');

// Create all our routes and set up logic within those routes where required.
router.get('/', (req, res) => {
    burger.selectAll((data) => {
        // if (err) throw err;
        res.render('index', { burgers: data });
    });
});

router.post('/api/burgers', (req, res) => {
    burger.insertOne(['burger_name'], [req.body.burger_name], (result) => {
        res.json({ id: result.insertId });
    });
});


// router.put('/api/burgers/:id', (req, res) => {

// });

module.exports = router;