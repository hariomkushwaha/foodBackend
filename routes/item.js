const express = require('express');
const router = express.Router();
const item = require('../models/items');

router.get('/',async(req,res)=>{
    try{
        const items= await item.find()
        res.json(items);

    }catch(err){
        res.send('Error' + err);

    } 
}); 
router.get('/:id',async(req,res)=>{
    try{
        const items= await item.findById(req.params.id)
        res.json(items);

    }catch(err){
        res.send('Error' + err);

    } 
});

router.post('/',async(req,res)=>{

    const items = new item({
        name:req.body.name,
        img:req.body.img,
        price:req.body.price
    });
    try{
        const itemdata = await items.save()
        res.json(itemdata);
    }catch(err){
        res.send('err');
    }
});

module.exports = router;