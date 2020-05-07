const express = require('express');

const app= express();

app.use('/',(req,res)=>{
    res.json({msg:'hello from server'})
})

module.exports=app;
