const express = require('express');
const router = express.Router();
const burger = require('../models/burger.js');

// Route to Get All Burgers 
router.get('/', (req, res) => {
    burger.selectAll((data) => {
        res.render('index', { burgers: data });
    });
});

// Route to insert a New Burger 
router.post('/api/burgers', (req, res) => {
    burger.insertOne(['burger_name'], [req.body.burger_name], (result) => {
        res.json({ id: result.insertId });
    });
});

// Route to Update an Exisiting Burgers State
router.put('/api/burgers/:id', (req, res) => {
    const condtion = `id = ${req.params.id}`;
    burger.updateOne(
        {
            devoured: req.body.devoured,
        },
        condtion,
        (result) => {
            if (result.changedRows === 0) {
                return res.status(404).end();
            }
            res.status(200).end();
        }
    );
});

module.exports = router;