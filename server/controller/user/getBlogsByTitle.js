const Blog = require('../../database/models/blogs')


const getBlogsByTitle=async(req,res,)=>{
    const {params:{search}}=req;
    const result=await Blog.find()
            if(!result){
                res.status(200).json({msg:'no result'})
            }
            else{
                const data=result.filter(({title})=>title.includes(search))
                res.status(200).json({data})
            }

}
module.exports=getBlogsByTitle