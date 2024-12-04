const express = require('express');
const path = require('path');
const methodOverride = require('method-override');
const {sequelize} = require('./models')

const {Auth, Category, Product} = require('./controllers')


const app = express();

const port = 80;


app.use(express.urlencoded({extended: true}));

//Indica que o formato dos dados seja JSON
app.use(express.json());

//Chama a o method override a partir da query '_method'
app.use(methodOverride('_method'));

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

//Define 'public', necessário para usar css com ejs.
app.use(express.static(path.join(__dirname, 'public')));

//Rotas...

app.use('/Auth', Auth)
app.use('/Categories', Category)
app.use('/Products', Product)

app.listen(port, () => {
    console.log('Working on port: ' + port);
})
