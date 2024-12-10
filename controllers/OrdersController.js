const {Product, Client, Order, ItemOrder} = require('../models')
const {Router} = require('express');
const jwt = require('jsonwebtoken');

const verifyToken = require('../middleware/verifyToken');
const { INTEGER } = require('sequelize');
const Orders = require('../models/Orders');


const router = Router();


router.post('/Add/:ID_Product', verifyToken, async (req, res) =>{
    const {ID_Product} = req.params;
   
    const token = req.cookies.token;
    const {qtd} = req.body;
    if(!token){
        res.redirect('/Auth/Login');
    }
    else{
        const client = await Client.findByPk(req.user.id);
        if(client){
            
            if(client.Current_Cart_id == null){
                var Price_total = await Product.findOne({where: {ID_Product : ID_Product}});
                //console.log(Price_total)
                Price_total = Price_total.Price* qtd;
                
                const new_order = await Order.create({Client_id : req.user.id, Status: "Awaiting Confirmation", Total_price : Price_total});
                await Client.update({Current_Cart_id : new_order.ID_ORDER}, {where: {ID_Client : req.user.id}})
                await ItemOrder.create({Order_id : new_order.ID_ORDER, Quantity: qtd, Product_id: ID_Product, Price_total: Price_total});
            }   
            else{
                const current_order = await Order.findByPk(client.Current_Cart_id)
                
                if(current_order.Status != "Awaiting Confirmation"){
                    var Price_total = await Product.findOne({where: {ID_Product : ID_Product}});
                    //console.log(Price_total)
                    Price_total = Price_total.Price* qtd;
                    
                    
                    const new_order = await Order.create({Client_id : req.user.id, Status: "Awaiting Confirmation", Total_price : Price_total});
                    await Client.update({Current_Cart_id : new_order.ID_ORDER}, {where: {ID_Client : req.user.id}})
                    await ItemOrder.create({Order_id : new_order.ID_ORDER, Quantity: qtd, Product_id: ID_Product, Price_total: Price_total});
                }
                else{
                    var product = await Product.findOne({where: {ID_Product : ID_Product}});
            
                    var Price_total = product.Price* qtd;
                    if(current_order.Total_price != NaN){
                        Price_total += current_order.Total_price;
                    }
                    
                    await Order.update({Total_price : Price_total}, {where: {ID_ORDER: client.Current_Cart_id}})
                    await ItemOrder.create({Order_id : client.Current_Cart_id, Quantity: qtd, Product_id: ID_Product, Price_total: product.Price* qtd});
                }

            }
            res.redirect('/Order/Cart');
        }
        else{
            res.redirect('/Auth/Login')
        }

    }
})


router.get('/Cart', verifyToken, async (req, res) => {
    const token = req.cookies.token;

    if (!token) {
        return res.redirect('/Auth/Login');
    } else {
        const client = await Client.findByPk(req.user.id);

        const current_order = await Order.findByPk(client.Current_Cart_id);
        if (current_order.Status !== "Awaiting Confirmation") {
            return res.send("<h1>Carrinho vazio</h1>");
        } else {
            const itemOrders = await ItemOrder.findAll({ where: { Order_id: client.Current_Cart_id } });

            // Use Promise.all to wait for all product fetches
            const listaDados = await Promise.all(itemOrders.map(async (itemOrder) => {
                const currentProduct = await Product.findByPk(itemOrder.Product_id);
               
                if(currentProduct !== null && currentProduct !== undefined && currentProduct !== NaN){
                    return {
                        Price_prod: currentProduct.Price,
                        Price_total: itemOrder.Price_total,
                        qtd: itemOrder.Quantity,
                        Name: currentProduct.Name,
                    };
                }
                else{
                    return {
                        Price_prod: null,
                        Price_total: null,
                        qtd: null,
                        Name: null,
                    }
                }
            }));
            console.log(listaDados)
            const filteredListaDados = listaDados.filter((item) => item.Price_prod !== null);
            console.log(listaDados)
            return res.render('Orders/Cart', {listaDados, success : true});
        }
    }
});
    





    // <%= product.Name %><br>
    // <%= product.qtd %><br>
    // <%= product.Price_total %><br>
    // <%= product.Price_individual %><br>



    //res.render('Orders/Cart')







module.exports = router;