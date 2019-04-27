const express=require('express');
const app=express();
const http=require('http');
const server=http.createServer(app);
require('dotenv').config();
const  bodyParser = require('body-parser');
const morgon=require('morgan');

app.use(morgon('dev'));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));


//routes
const userRoutes=require('./routes/user');

app.use('/users',userRoutes);

server.listen(process.env.PORT,()=>{
    console.log(`server listeing on port ${process.env.PORT}`)
});