const express = require('express'),

      router = express.Router(),

      Post = require('../models/Post');



router.get('/', (req, res) => {

    console.log('post page was used');
    

    res.send('now on post');
})

router.get('/user001', (req, res) => {
    res.send("User 1's post");
})





module.exports = router;