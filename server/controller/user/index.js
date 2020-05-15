const {register,login,logout}=require('./auth')
const {getAllUsers,deleteAllUsers} = require('./usersApi')

module.exports={register,getAllUsers,deleteAllUsers,login,logout}