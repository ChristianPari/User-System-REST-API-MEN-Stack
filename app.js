const express = require('express');
const app = express();

      app.get('/', (req,res) => {
          app.send('hello user');
      })

app.listen('4000');