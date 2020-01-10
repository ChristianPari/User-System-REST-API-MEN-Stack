const express = require('express'),

      router = express.Router(),

      Post = require('../models/Post');



router.get('/', (req, res) => {

    console.log('post page was used');
    

    res.send('now on post');
})

router.post('/', (req, res) => {

    const post = new Post({
        title: req.body.title,
        description: req.body.description
    });

    // console.log(post);
    // try {

    //     post.save()
    //     console.log(post);
    //     res.json(post);

    // } catch(err) {
    //     console.log('an error has occured while posting');
    //     res.json({message: 'an error has occured'})
        
    // }

    post.save()
    .then(data => {
        console.log(data);
        res.json(data);
    })
    .catch(err => {
        res.json({message: err})
    })

    // console.log(req.body);
})

router.get('/user001', (req, res) => {
    res.send("User 1's post");
})





module.exports = router;