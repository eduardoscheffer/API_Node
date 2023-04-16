const express = require('express');
const app = express();
const port = 3000;
const baloes = require('./database/baloes.json');

app.get('/', (req, res) => {
    res.send(baloes);
    // res.send('Hello World');
})

app.listen(port);