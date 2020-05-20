const express = require('express');
const cookieParser=require('cookie-parser')
const bodyParser=require('body-parser')
const {join}=require('path')

const app= express();

const router=require('./routes')
const {client,server}=require('./controller')

//middleware
app.use(express.json());
app.use(bodyParser.json({ extended: false }));
app.use(cookieParser())
app.use(express.urlencoded({ extended: false }));
app.use(express.static(join(__dirname, '..', 'client', 'build')));
//all routes
app.use('/api/v1',router)
//handel client error
app.use(client)
//handel server error
app.use(server)

module.exports=app;
