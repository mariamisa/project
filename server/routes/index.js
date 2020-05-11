const Router=require('express').Router();

const {register} =require('../controller');
const {registerValidation} =require('../middelware')

Router.post('/register',registerValidation,register)

module.exports=Router;