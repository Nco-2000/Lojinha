const express = require('express');
const path = require('path');
const methodOverride = require('method-override');
const {sequelize} = require('./models')

const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const passport = require('passport');
const jwt = require('jsonwebtoken');

require('dotenv').config();




const {Auth, Category, Product, Order} = require('./controllers')


const app = express();

const port = 80;


app.use(express.urlencoded({extended: true}));

//Indica que o formato dos dados seja JSON
app.use(express.json());

//Chama a o method override a partir da query '_method'
app.use(methodOverride('_method'));

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use(cookieParser());
app.use(passport.initialize());

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

//Define 'public', necessário para usar css com ejs.
app.use(express.static(path.join(__dirname, 'public')));



//Rotas...
app.use('/Auth', Auth)
app.use('/Categories', Category)
app.use('/Products', Product)
app.use('/Order', Order)

app.use((req, res) => {
    console.log(`Middleware processing request: ${req.method} ${req.url}`);
   
    res.status(404).send('Page not found');
});



app.listen(port, () => {
    console.log('Working on port: ' + port);
})
