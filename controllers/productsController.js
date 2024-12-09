const {Product, Category} = require('../models')
const {Router} = require('express');
const jwt = require('jsonwebtoken');

const verifyToken = require('../middleware/verifyToken');


const router = Router();

//Lista dos produtos.
router.get('/', verifyToken, async(req, res) => {
    var success = true;
    const token = req.cookies.token;

    if (!token) {
        res.redirect('/Auth/Login');
    }

    if(req.user.role == "Admin"){
        try{
            Product.findAll().then(products =>{
                if(products.length > 0){
                    res.render('Products/ViewProductsAdmin', {products, success : true});
                }else{
                    res.render('Products/ViewProductsAdmin', {success : false});
                }
            })
        }catch{
            res.render('Products/ViewProductsAdmin', {success : false});
        }
    }
    else if(req.user.role == "Client"){
        try{
            Product.findAll().then(products =>{
                if(products.length > 0){
                    res.render('Products/ViewProductsClient', {products, success : true});
                }else{
                    res.render('Products/ViewProductsClient', {success : false});
                }
            })
        }catch{
            res.render('Products/ViewProductsClient', {success : false});
        }
    }
})

//ver mais informaçoes de um produto
router.get('/:ID_Product', async (req, res)=>{
    const {ID_Product} = req.params

    const product = await Product.findByPk(ID_Product);
    if(product){
        res.render('Products/ViewProduct', {product, success : true})
    }else{
        res.redirect('/');
    }



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
router.post('/Edit/:ID_Product', async(req, res) => {
    const {ID_Product} = req.params

        const product = await Product.findByPk(ID_Product);
        if(product){
            res.render('Products/EditProduct', {product : product, Success : true})
        }
        else{
            res.render('Products/EditProduct', {Success : false})
        }
})


router.patch('/Edit/:ID_Product', async(req, res) => {
    const {Name, Stock, Price, Category_id, Weight, Size, Color, Description} = req.body
    const {ID_Product} = req.params


    const Product_found = await Product.findByPk(ID_Product);
    if(Product_found){
        try{
            const updated_product = Product.update({Name, Stock, Price, Category_id, Weight, Size, Color, Description}, {where: {ID_Product : ID_Product}} )
            console.log(updated_product)
            res.redirect('/products')
        }catch{
            res.send("<h1>Error updating the category</h1>")
        }
    }
    else{
        res.send("<h1>Error updating the category</h1>")
        
    }
})

//Deletar Produto.
router.delete('/Delete/:ID_Product', async(req, res) => {
    const {ID_Product} = req.params

    Product.destroy({where: {ID_Product : ID_Product}}).then(deleted => {
        if (deleted) {
            res.redirect('/products')
        } else {
            res.send('<h1>The product does not exist</h1>');
        }
      }).catch(error => {
        res.send('<h1>Error deleting product</h1>');
      });
    
})

module.exports = router;