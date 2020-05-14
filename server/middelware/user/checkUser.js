const User = require('../../database/models/users')

const checkEmail=async(req,res,next)=>{
    const {body:{email}} = req
        const result=await User.findOne({email})
            if(!result){
                next()
            }
            else{
                res.status(400).json({ msg:'email already exists!!' });
            }
}

module.exports={checkEmail}