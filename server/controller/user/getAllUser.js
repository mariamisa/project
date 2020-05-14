const User=require('../../database/models/users')

module.exports= async(req,res)=>{
    try{
        const users=await User.find();
        if(!users) return res.json({msg:'no users'})
        res.json({users})
    }catch(e){
        console.log(e);
    }
    
}