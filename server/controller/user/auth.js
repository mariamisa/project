const User = require('../../database/models/users')
const bcrypt = require('bcrypt');
const jwt=require('jsonwebtoken')

const register= async (req,res)=>{
    const {body:{name,email,password,userId,city}}=req
    bcrypt.hash(password, 10,async(err, hashPassword)=> {
        if(err) return res.status(500).json({msg:'server error'})
        try{
            const data= await User.create({
                name,
                email,
                password:hashPassword,
                userId,
                city
            })
            res.json({msg:`user for id ${data._id} created sucessfully`,data})
        }catch(e){
            next(e);
        }
    });
}

const login= async(req,res)=>{
    //check user if register
    const {body:{email,password}}=req;
    try{
        const result= await User.findOne({email})
        if(!result)return res.json({msg:'user dosent register!!'})

        //compare password
        const match = await bcrypt.compare(password, result.password);
        if(!match) return res.json({msg:'un correct passwords'})

        //create token for user
        const token= jwt.sign({_id:result._id,name:result.name },process.env.SECRET_KEY);
        res.cookie('token',token)
        res.json({msg:'login'})
    }
    catch(e){
        next(e);
    }
}

const logout=(req,res)=>{
    res.clearCookie('token').json({ message: 'logged out successfully' });

}


module.exports={register,login,logout}