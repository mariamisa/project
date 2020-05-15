const express = require('express');
const cookieParser=require('cookie-parser')
const bodyParser=require('body-parser')

const app= express();

const router=require('./routes')

app.use(express.json());
app.use(bodyParser.json({ extended: false }));
app.use(cookieParser())
app.use(express.urlencoded({ extended: false }));
app.use('/api/v1',router)

module.exports=app;
