const {register,login,logout}=require('./auth')
const {getAllUsers,deleteAllUsers} = require('./usersApi')
const googleAuth=require('./googleAuth')

module.exports={register,getAllUsers,deleteAllUsers,login,logout,googleAuth}