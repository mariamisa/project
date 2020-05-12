const {findOne} = require('../../database/queries/users')

const checkEmail=(req,res,next)=>{
    const {body:{email}} = req
        const result=findOne(email)
            console.log(result);
            if(!result){
                next()
            }
            else{
                res.status(400).json({ msg:'email exists!!' });
            }
}

module.exports={checkEmail}