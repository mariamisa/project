const {registerValidation,loginValidation,addBlogValidation}=require('./validation')
const {checkEmail } =require('./checkUser')

module.exports={registerValidation,checkEmail,loginValidation,addBlogValidation}