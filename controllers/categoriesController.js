const {Category} = require('../models');
const {Router} = require('express');

const router = Router();

//Lista das categorias.
router.get('/', async(req, res) => {
    var success = false

    try{
        const categories = await Category.findAll()
        res.render('Categories/ViewCategories', {categories, success})
    
    }catch{
        success = false;
        res.render('Categories/ViewCategories', {success})
    }
})

//Ver categoria individual.
router.get('/categories/:id', async(req, res) => {

})

router.get('/New', async(req, res) => {
    res.render('Categories/AddCategory')
})

//Adicionar categoria.
router.post('/New', async(req, res) => {
    const {Name} = req.body

    const category_found = await Category.findOne({where: {Name : Name}});

    if(category_found){
        res.send("<h1>Category already exists.</h1>")
    }
    else{
        await Category.create({Name});
        res.send("<h1>Category created.</h1>")
    }

})

//Editar categoria.
router.patch('/categories/:id', async(req, res) => {

})

//Deletar categoria.
router.delete('/categories/:id', async(req, res) => {

})

module.exports = router;