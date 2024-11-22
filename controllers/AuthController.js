const {Client} = require('../models')
const {Router} = require('express');

const router = Router();

//Errors 
//1 - email ja existe
//2 - name ja existe



router.get('/cadastro', async(req,res)=>{
    res.render('Auth/Signin');
})

router.post('/cadastro', async(req,res)=>{
    const {Name, Email, Password, Comfirm_Password} = req.body;

    const email_found = await Client.findOne({where: {Email : Email}});




    if(Comfirm_Password != Password){
        res.send('<h1>Email Already in use.</h1>')
        res.send("<h1>As duas senhas são diferentes.</h1>")
    }
    else if(email_found){
        res.send('<h1>Email Already in use.</h1>')
    }
    else{
        res.send("<h1>Conta criada com sucesso</h1>")
        await Client.create({Name, Email, Password});
    }
})

router.get('/login', async(req,res)=>{
    const {Email, Password} = req.body
})







module.exports = router;
