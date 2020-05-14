const {register,login,logout}=require('./auth')
const getAllUsers = require('./getAllUser')

module.exports={register,getAllUsers,login,logout}