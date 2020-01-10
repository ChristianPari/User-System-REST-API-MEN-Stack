const express = require('express');

const router = express.Router();

router.get('/', (req, res) => {

    console.log('home page was used');
    

    res.send('now on home');
})





module.exports = router;