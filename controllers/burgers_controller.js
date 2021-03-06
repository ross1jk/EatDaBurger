const express = require('express');
const router = express.Router();
const burger = require('../models/burger.js');

// Create all our routes and set up logic within those routes where required.
router.get('/', (req, res) => {
});

router.post('/api/burgers', (req, res) => {

});

router.put('/api/burgers/:id', (req, res) => {

});

router.delete('/api/burgers/:id', (req, res) => {

});

module.exports = router;