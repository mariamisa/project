const {registerValidation,loginValidation,addBlogValidation}=require('./validation')
const {checkEmail } =require('./checkUser')
const protected = require('./protectedRoute')

module.exports={registerValidation,checkEmail,loginValidation,addBlogValidation,protected}