const express = require('express');

const app = express();


//Routes
app.get('/', (req,res) => {
    res.send('hello user');
})

app.get('/post', (req, res) => {
    res.send('you are on the post page');
})

app.listen(4000);