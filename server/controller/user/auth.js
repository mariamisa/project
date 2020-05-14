const User = require('../../database/models/users')
const bcrypt = require('bcrypt');
const jwt=require('jsonwebtoken')

const register= async (req,res)=>{
    const {body:{name,email,password,city}}=req
    bcrypt.hash(password, 10,async(err, hashPassword)=> {
        if(err) return res.status(500).json({msg:'server error'})
        try{
            const {_id}= await User.create({
                name,
                email,
                password:hashPassword,
                city
            })
            res.json({msg:`user for id ${_id} created sucessfully`})
        }catch(e){
            console.log(e);
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
        const token= jwt.sign({_id:result._id },process.env.SECRET_KEY);
        res.cookie('token',token);
        res.json({msg:'login'})
    }
    catch(e){
        console.log(e);
    }
}

const logout=(req,res)=>{
    res.clearCookie('token').json({msg:'logout'})
}


module.exports={register,login,logout}