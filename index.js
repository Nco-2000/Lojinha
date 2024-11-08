const express = require('express');
const path = require('path');

const app = express();

const port = 80;

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

//Rotas...

app.listen(port, () => {
    console.log('Working on port: ' + port);
})
