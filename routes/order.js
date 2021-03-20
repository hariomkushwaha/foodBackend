const express = require('express');
const router = express.Router();
const order = require('../models/order');

router.get('/',async(req,res)=>{
    try{
        const orders= await order.find()
        res.json(orders);

    }catch(err){
        res.send('Error' + err);

    } 
});

router.get('/:id',async(req,res)=>{
    try{
        const orders= await order.findById(req.params.id)
        res.json(orders);

    }catch(err){
        res.send('Error' + err);

    } 
});

router.post('/',async(req,res)=>{

    const orders = new order({
        name:req.body.name,
        item:req.body.item,
        price:req.body.price
    });
    try{
        const orderData = await orders.save()
        res.json(orderData);
    }catch(err){
        res.send('err');
    }
});

module.exports = router;