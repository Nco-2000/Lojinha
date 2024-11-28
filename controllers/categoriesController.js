const {Category} = require('../models');
const {Router} = require('express');

const router = Router();

//Lista das categorias.
router.get('/', async(req, res) => {
    var success = true

    try{
        Category.findAll().then(categories =>{
            res.render('Categories/ViewCategories', {Category : categories, success})
        })
        //console.log(categories);
        //res.render('Categories/ViewCategories', {categories, success})
    }catch{
        success = false;
        res.render('Categories/ViewCategories', {success})
    }
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
router.get('/:ID_Category', async(req, res) => {
    const {ID_Category} = req.params;

    try{
        const category = await Category.findByPk(ID_Category)
        res.render('Categories/EditCategory', {category});
    }catch{
        res.send("<h1>Could not get the category.</h1>")
    }

})

router.patch('/:ID_Category', async(req, res) => {
    const category = req.body
    res.redirect('/categories')
})

//Deletar categoria.
router.delete('/:ID_Category', async(req, res) => {

})
module.exports = router;