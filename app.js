const express = require('express'),
      app = express(),
      mongoose = require('mongoose');

      require('dotenv/config');


//Import Routes


//post route
const postRoute = require('./routes/post');
app.use('/post', postRoute);

//homepage route
const homeRoute = require('./routes/home');
app.use('/', homeRoute);


//Connect to Data-Base

mongoose.connect(process.env.DB_HOMECONNECT, { useNewUrlParser: true}, () => {
    console.log('\nDataBase Connected:\n');
    
}, { useUnifiedTopology: true })

app.listen(4000);