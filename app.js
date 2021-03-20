const express = require('express');
const mongoose = require('mongoose');
const connectDB = require('./utils/db');

const app = express();
const PORT = process.env.PORT || 5000
app.use(express.json());
if (process.env.NODE_ENV === "production") {
    app.use(compression())
  }


connectDB();
app.get('/',function(req,res){
    res.json({"msg":"working fine"});
})

 
const userRouter = require('./routes/user')
app.use('/user',userRouter);

const itemRouter = require('./routes/item');
app.use('/item',itemRouter);


const orderRouter = require('./routes/order');
app.use('/order',orderRouter);


app.listen(PORT, () => {
    console.log(`Server started on PORT ${PORT}`)
  })