const express = require('express'),
      app = express(),
      mongoose = require('mongoose');

      require('dotenv/config');

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

mongoose.connect(process.env.DB_HOMECONNECT, { useNewUrlParser: true }, () => {
    console.log('connected to the database');
    
})

app.listen(4000);