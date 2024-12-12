const {Client, Admin, Order, ItemOrder} = require('../models')
const {Router} = require('express');
const passport = require('passport');
const jwt = require('jsonwebtoken');
require('dotenv').config();
const router = Router();

const verifyToken = require('../middleware/verifyToken');
//Errors 
//1 - email ja existe
//2 - name ja existe


router.get('/cadastro', async(req,res)=>{
    res.render('Auth/NewSignin');
})

router.post('/cadastro', async(req,res)=>{
    const {Name, Email, Password, Comfirm_Password} = req.body;

    const email_found = await Client.findOne({where: {Email : Email}});

    if(Comfirm_Password != Password){
        res.send("<h1>As duas senhas são diferentes.</h1>")
    }
    else if(email_found){
        res.send('<h1>Email Already in use.</h1>')
    }
    else{
        res.redirect('Auth/NewLogin')
        await Client.create({Name, Email, Password});
    }
})

router.get('/login', async(req,res)=>{
    res.render('Auth/NewLogin');
})


router.post('/login', async (req, res) => {
    const { Email, Password } = req.body;

    const email_found = await Client.findOne({ where: { Email: Email } });
    const email_found_admin = await Admin.findOne({where: {Email : Email}});
    if (email_found) {
        if (email_found.Password === Password) {
            // Create a JWT token
            const payload = { id: email_found.ID_Client, name: email_found.Name, role: "Client"};  // JWT payload (we store the client ID)
            const token = jwt.sign(payload, process.env.JWT_SECRET, { expiresIn: '1h' });
            // Send the token to the client (in the response body)
            res.cookie('token', token, { httpOnly: true, secure: true, sameSite: 'Strict' });
            res.redirect('/products');
        } else {
            res.send("<h1>Incorrect password</h1>");
        }
    } else if(email_found_admin){
        if(email_found_admin.Password === Password){
            const payload = { id: email_found_admin.ID_Admin, name: email_found_admin.Name, role: "Admin"};  // JWT payload (we store the client ID)
            const token = jwt.sign(payload, process.env.JWT_SECRET, { expiresIn: '1h' });
            // Send the token to the client (in the response body)
            res.cookie('token', token, { httpOnly: true, secure: true, sameSite: 'Strict' });
            res.redirect('/products');
        }
        else{
            res.send("<h1>Incorrect password</h1>");
        }
    }else{
        res.send("<h1>No account found with this email.</h1>");
    }
});




router.get('/Profile', verifyToken, async(req,res)=>{
    const token = req.cookies.token;
    var success = false;
    console.log(token)
    if (!token) {
        res.redirect('/Auth/Login');
    }
    else{
        const user_found = await Client.findOne({where: {ID_Client : req.user.id}});

        if(user_found){
            res.render('Auth/Profile', {user: user_found, success : true});
        }
        else{
            res.render('Auth/Profile', {success : false});
        }
    }
});

router.post('/Profile/Edit/:id' , verifyToken, async(req,res)=>{
    const {id} = req.params
    const token = req.cookies.token;
    if (!token) {
        res.redirect('/Auth/Login');
    }
    else{
        const user_found = await Client.findOne({where: {ID_Client : id}});
        if(user_found){
            res.render('Auth/EditProfile', {user : user_found});
        }
        else{
            res.redirect('/Auth/Login');
        }
    }
})

router.patch('/Profile/Edit/:ID_Client', async(req,res)=>{
    var {Name, Phone, Password, Address} = req.body
    const {ID_Client} = req.params

    const client_found = await Client.findByPk(ID_Client);
    if(client_found){

        if(Name == ""){
            Name = client_found.Name
        }
        if(Password == ""){
            Password = client_found.Password
        }
        if(Address == ""){
            Address = client_found.Address
        }
        if(Phone == ""){
            Phone = client_found.Phone
        }
      
        try{
            const updated_client = Client.update({Name, Password, Address, Phone}, {where: {ID_Client : ID_Client}} )

            if(updated_client){
                res.redirect('/Auth/Profile')
            }
        }catch{
            res.send("<h1>Error updating the Profile</h1>")
        }
    }
    else{
        res.send("<h1>Error updating the Profile</h1>")
        
    }
})

router.delete('/Profile/Delete/:ID_Client', verifyToken, async (req, res) => {
    const { ID_Client } = req.params;

    try {
        const deleted = await Client.destroy({ where: { ID_Client: ID_Client } });

        if (deleted) {
            const orders = await Order.findAll({ where: { Client_id: ID_Client } });

            for (let order of orders) {
                const order_id = order.ID_ORDER;
                const item_orders = await ItemOrder.findAll({ where: { Order_id: order_id } });

                for (let item of item_orders) {
                    await item.destroy();
                }
            }
            await Order.destroy({ where: { Client_id: ID_Client } });


            res.clearCookie('token', { httpOnly: true, secure: true, sameSite: 'Strict' });



            res.redirect('/Auth/Cadastro');
        } else {
            res.send('<h1>The client does not exist</h1>');
        }
    } catch (error) {
        console.error(error);
        res.send('<h1>Error deleting client</h1>');
    }
});


router.get('/Users', verifyToken, async(req, res) =>{
    if(req.user.role == "Admin"){
        
        try{
            Client.findAll().then(client =>{
                if(client.length > 0){
                    res.render('Auth/ViewUsers', {Success : true, Clients : client});
                }else{
                    res.render('Auth/ViewUsers', {success : false})
                }
            })
        }catch{
            res.render('Auth/ViewUsers', {success : false})
        }
    }
    else{
        res.redirect('/')
    }
})













module.exports = router;