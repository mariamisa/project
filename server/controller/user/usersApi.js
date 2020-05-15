const User=require('../../database/models/users')

const getAllUsers= async(req,res)=>{
    try{
        const users=await User.find();
        if(!users) return res.json({msg:'no users'})
        res.json({users})
    }catch(e){
        console.log(e);
    }
    
}

const deleteAllUsers=async(req,res)=>{
    try{
        const users=await User.deleteMany({});
        console.log(users);
        if(!users) return res.status(200).json({data:'error on delete'})
        res.status(200).json({data:'all users deleted!!'})
    }
    catch(e){
        console.log(e);
    }
}


module.exports={getAllUsers,deleteAllUsers}