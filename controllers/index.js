const AuthController = require('./AuthController');
const CategoriesController = require('./CategoriesController');
const ProductsCOntroller = require('./ProductsController');
controllers = {
    Auth: AuthController,
    Category : CategoriesController,
    Product : ProductsCOntroller,
}

module.exports = controllers;