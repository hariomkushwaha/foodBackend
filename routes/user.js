const express = require('express');
const router = express.Router();
const user = require('../models/user');

router.get('/',async(req,res)=>{
    try{
        const users= await user.find()
        res.json(users);

    }catch(err){
        res.send('Error' + err);

    } 
}); 
router.get('/:id',async(req,res)=>{
    try{
        const users= await user.findById(req.params.id)
        res.json(users);

    }catch(err){
        res.send('Error' + err);

    } 
});
router.post('/',async(req,res)=>{

    const users = new user({
        name:req.body.name,
        email:req.body.email,
        password:req.body.password
    });
    try{
        const userdata = await users.save()
        res.json(userdata);
    }catch(err){
        res.send('err');
    }
});

module.exports = router;