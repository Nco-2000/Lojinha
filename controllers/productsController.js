const {Product, Category} = require('../models')
const {Router} = require('express');



const router = Router();

//Lista dos produtos.
router.get('/', async(req, res) => {
    var success = true;
    try{
        Product.findAll().then(products =>{
            if(products.length > 0){
                res.render('Products/ViewProducts', {products, success : true});
            }else{
                res.render('Products/ViewProducts', {success : false});
            }
        })
    }catch{
        res.render('Products/ViewProducts', {success : false});
    }
})

//Ver Produto individual.
router.get('/products/:id', async(req, res) => {

})

//Adicionar Produto.
router.get('/New', async(req, res) => {
    res.render('Products/AddProduct');
})

router.post('/New', async(req, res) => {
    const {Name, Category_name, Stock, Price, Weight, Size, Color, Description} = req.body

        const product_found = await Product.findOne({where: {Name : Name}});
        if(product_found){
            res.send('Ja existe um produto com esse nome')
            return
        }   

        const category_found = await Category.findOne({where: {Name : Category_name}})
        if(category_found){
            const Category_id = category_found.ID_Category
        
            await Product.create({Name, Stock, Price, Category_id, Weight, Size, Color, Description});
            res.redirect('/products') 
            
        }
        else{
            res.send("Categoria nao encontrada.")
        }

})

//Editar Produto.
router.post('/Edit/:id', async(req, res) => {
    const {ID_Product} = req.params
    try{
        const product = Product.findByPk(ID_Product);
        if(product){
            res.render('Products/EditProduct', {Product : product, Success : true})
        }
        else{
            res.render('Products/EditProduct', {Success : false})
        }
    }catch{
        res.render('Products/EditProduct', {Success : false})
    }
})
router.patch('/Edit/:id', async(req, res) => {

})

//Deletar Produto.
router.delete('/Delete/:id', async(req, res) => {

})

module.exports = router;