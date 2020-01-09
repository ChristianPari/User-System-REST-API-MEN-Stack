const express = require('express'),
      app = express(),
      mongoose = require('mongoose');

//Middle Ware

app.use('/post', (req, res) => {
    console.log('the post route was used');
    
})


//Routes
app.get('/', (req,res) => {
    res.send('hello user');
})

app.get('/post', (req, res) => {
    res.send('you are on the post page');
})

//Connect to Data-Base

mongoose.connect('mongodb+srv://user314:31415>@cluster0-ichxa.mongodb.net/test?retryWrites=true&w=majority', { useNewUrlParser: true }, () => {
    console.log('connected to the database');
    
})

app.listen(4000);