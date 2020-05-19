const {register,login,logout}=require('./auth')
const {getAllUsers,deleteAllUsers} = require('./usersApi')
const googleAuth=require('./googleAuth')
const getBlogsByTitle =require('./getBlogsByTitle')

module.exports={register,getAllUsers,deleteAllUsers,login,logout,googleAuth,getBlogsByTitle}