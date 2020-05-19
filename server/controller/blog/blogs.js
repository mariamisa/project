const jwt=require('jsonwebtoken')

const Blog=require('../../database/models/blogs')

const getAllBlogs=async(req,res,next)=>{
    try{
        const blogs=await Blog.find();
        if(!blogs) return res.status(200).json({data:'no blogs'})
        res.status(200).json({data:blogs})
    }
    catch(err){
        next(err);
    }
}
const addNewBlog=async(req,res,next)=>{
    const {body:{title,description,img}}=req;
    const {_id,name}= jwt.decode(req.cookies.token,process.env.SECRET_KEY)
    const author=_id;
    const authorName=name
    try{
        const newBlog=await Blog.create({title,img,description,author,authorName})
        if(!newBlog){
            const err = new Error();
            err.msg = 'failed to add blog';
            throw err;
        }else{
            res.status(200).json({msg:`blog with title:${newBlog.title} added successfully`})
        }
    }
    catch(err){
        next(err);
    }
}

const deleteAllBlogs=async(req,res,next)=>{
    try{
        const blogs=await Blog.deleteMany({});
        if(!blogs){
            const err = new Error();
            err.msg = 'error on delete';
            throw err;
        }else{
            res.status(200).json({data:'all blogs deleted!!'})
        }
    }
    catch(err){
        next(err);
    }
}

module.exports={getAllBlogs,addNewBlog,deleteAllBlogs}