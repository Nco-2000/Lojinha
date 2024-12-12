const {Category, Product} = require('../models');
const {Router} = require('express');

const router = Router();

//Lista das categorias.
router.get('/', async(req, res) => {
    var success = true

    try{
        Category.findAll().then(categories =>{
            if(categories.length > 0){
                res.render('Categories/ViewCategories', {Category : categories, success})
            }else{
                success = false;
                res.render('Categories/ViewCategories', {success})
            }
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
router.post('/Edit/:ID_Category', async(req, res) => {
    const {ID_Category} = req.params;

    try{
        const category = await Category.findByPk(ID_Category)
        res.render('Categories/EditCategory', {category, success : true});
    }catch{
        res.send("<h1>Could not get the category.</h1>")
    }

})

router.patch('/Edit/:ID_Category', async(req, res) => {
    const {Name} = req.body
    const {ID_Category} = req.params


    const category_found = await Category.findOne({where: {Name : Name}});
    if(category_found){
        res.send("<h1>A category with this name already exists</h1>")
    }
    else{
        try{
            const updated_category = await Category.update({Name : Name}, {where: {ID_Category : ID_Category}} )
            res.redirect('/categories')
        }catch{
            res.send("<h1>Error updating the category</h1>")
        }
    }
})


router.post('/submit', (req, res) => {
    const name = req.body.name;  // Extract data from the request body
    const message = `Are you sure you want to submit the form, ${name}?`;  // Confirmation message
    
    // Send the confirmation message back to the client
    res.json({ message: message });
  });


//Deletar categoria.
router.delete('/Delete/:ID_Category', async(req, res) => {
    const {ID_Category} = req.params

    Category.destroy({where: {ID_Category : ID_Category}}).then(deleted => {
        if (deleted) {
            res.redirect('/categories')
        } else {
            res.send('<h1>No user found with the given ID</h1>');
        }
      }).catch(error => {
        res.send('<h1>Error deleting user</h1>');
      });
})

module.exports = router;
