const express = require('express');
const router = express.Router();
const pool = require('../modules/pool.js');

// GET data from  "feedback" table
router.get('/', (req,res) => {
    const queryText = 'SELECT * FROM "feedback"';
    pool.query(queryText).then(response => {
        res.send(response.rows);
    }).catch(error => {
        console.log('error in GET', error);
        res.sendStatus(500);
    });
});

// POST to the server
router.post('/', (req,res) => {
    console.log(req.body);
    
    const queryText = `INSERT INTO "feedback" ("feeling", "understanding", "support", "comments")
                       VALUES ($1, $2, $3, $4)`
    pool.query(queryText, 
                        [req.body.feeling,
                        req.body.understanding,
                        req.body.support,
                        req.body.comments]).then(response => {
        res.sendStatus(200);
    }).catch(error => {
        console.log('error in POST', error);
        res.sendStatus(500);  
    });
})


module.exports = router;