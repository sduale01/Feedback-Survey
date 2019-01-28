const express = require('express');
const router = express.Router();
const pool = require('../modules/pool.js');

// GET data from  "feedback" table
router.get('/', (req,res) => {
    const queryText = 'SELECT * FROM feedback';
    pool.query(queryText).then(response => {
        res.send(response.rows);
    }).catch(error => {
        console.log('error in GET', error);
        res.sendStatus(500);
    });
})

module.exports = router;