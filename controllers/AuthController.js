const {Clients} = require('../models')
const {Router} = require('express');

const router = Router()

//Errors 
//1 - email ja existe
//2 - name ja existe







router.post('/cadastro', async(req,res)=>{
    const {name, email} = req.body;

    const {id_email} = await Clients.findOne({
        where: {email : email}
    })

    const {id_name} = await Clients.findOne({
        where: {name : name}
    })

    let errors  = [];

    if(id_email){
        errors.push(1)
        res.send('<h1>Email Already in use.</h1>')
    }
    if(id_name){
        errors.push(2)
        res.send('<h1>Email Already in use.</h1>')
    }
    
    if(length(errors) > 0){
        res.send('errors: ', {errors})
    }
    else{
        req.send("<h1>Conta criada com sucesso</h1>")
    }




})










