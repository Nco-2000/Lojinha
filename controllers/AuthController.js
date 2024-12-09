const {Client} = require('../models')
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
    } else {
        res.send("<h1>No account found with this email.</h1>");
    }
});

router.get('/protected', passport.authenticate('jwt', { session: false }), (req, res) => {
    res.json({ message: 'You are authenticated!', user: req.user });
});

module.exports = router;