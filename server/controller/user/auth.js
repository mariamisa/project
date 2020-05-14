const User = require('../../database/models/users')
const bcrypt = require('bcrypt');

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

module.exports={register}