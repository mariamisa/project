const {registerValidation,checkEmail,loginValidation,protected} = require('./user')
const validationBlog=require('./blog/validation')

module.exports={registerValidation,checkEmail,loginValidation,protected,validationBlog}