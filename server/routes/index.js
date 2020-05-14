const Router=require('express').Router();

const {register,getAllUsers,login,logout} =require('../controller');
const {registerValidation,checkEmail,loginValidation} =require('../middelware')


Router.get('/users',getAllUsers)
Router.post('/register',registerValidation,checkEmail,register)
Router.post('/login',loginValidation,login)
Router.get('/logout',logout)

module.exports=Router;