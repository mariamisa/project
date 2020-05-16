const express = require('express');
const cookieParser=require('cookie-parser')

const app= express();

const router=require('./routes')
const {client,server}=require('./controller')

//middelwares
app.use(express.json());
app.use(cookieParser())
app.use(express.urlencoded({ extended: false }));

//all routes
app.use('/api/v1',router)
//handel client error
app.use(client)
//hendel server error
app.use(server)

module.exports=app;
