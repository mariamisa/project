const Router=require('express').Router();

const {register} =require('../controller');
const {registerValidation,checkEmail} =require('../middelware')

Router.post('/register',registerValidation,checkEmail,register)

module.exports=Router;