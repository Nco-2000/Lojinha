const AuthController = require('./AuthController');
const CategoriesController = require('./CategoriesController')

controllers = {
    Auth: AuthController,
    Category : CategoriesController,
}

module.exports = controllers;