const Router=require('express').Router();

const {register,getAllUsers} =require('../controller');
const {registerValidation,checkEmail} =require('../middelware')


Router.get('/users',getAllUsers)
Router.post('/register',registerValidation,checkEmail,register)

module.exports=Router;