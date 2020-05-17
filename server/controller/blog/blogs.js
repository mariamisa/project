const jwt=require('jsonwebtoken')

const Blog=require('../../database/models/blogs')

const getAllBlogs=async(req,res,next)=>{
    try{
        const blogs=await Blog.find();
        if(!blogs) return res.status(200).json({data:'no data'})
        res.status(200).json({data:blogs})
    }
    catch(e){
        next(e);
    }
}
const addNewBlog=async(req,res)=>{
    const {body:{title,description,img}}=req;
    const {_id,name}= jwt.decode(req.cookies.token,process.env.SECRET_KEY)
    console.log(_id,name);
    const author=_id;
    const authorName=name
    try{
        const newBlog=await Blog.create({title,img,description,author,authorName})
        if(!newBlog) return res.json({msg:'error'})
        res.json({data:`${newBlog} add succesfuly`})
    }
    catch(e){
        console.log(e);
    }
}

const deleteAllBlogs=async(req,res)=>{
    try{
        const blogs=await Blog.deleteMany({});
        if(!blogs) return res.status(200).json({data:'error on delete'})
        res.status(200).json({data:'all blogs deleted!!'})
    }
    catch(e){
        console.log(e);
    }
}

module.exports={getAllBlogs,addNewBlog,deleteAllBlogs}