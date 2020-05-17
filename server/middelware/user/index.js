const {registerValidation,loginValidation}=require('./validation')
const {checkEmail } =require('./checkUser')
const protected = require('./protectedRoute')

module.exports={registerValidation,checkEmail,loginValidation,protected}