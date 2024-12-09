const AuthController = require('./AuthController');
const CategoriesController = require('./CategoriesController');
const ProductsCOntroller = require('./ProductsController');
const OrdersController = require('./OrdersController');
controllers = {
    Auth: AuthController,
    Category : CategoriesController,
    Product : ProductsCOntroller,
    Order : OrdersController,
}

module.exports = controllers;