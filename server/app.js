const express = require('express');
const app= express();
const {join} = require('path')

const router=require('./routes')

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

//handel static file 
app.use(express.static(join(__dirname,'./', 'public')));

app.use(router)

module.exports=app;
