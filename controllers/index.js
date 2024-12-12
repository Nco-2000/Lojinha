const AuthController = require('./AuthController');
const CategoriesController = require('./CategoriesController');
const ProductsController = require('./ProductsController');
const OrdersController = require('./OrdersController');
controllers = {
    Auth: AuthController,
    Category : CategoriesController,
    Product : ProductsController,
    Order : OrdersController,
}

module.exports = controllers;