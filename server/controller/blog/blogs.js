const jwt=require('jsonwebtoken')

const Blog=require('../../database/models/blogs')

const getAllBlogs=async(req,res)=>{
    try{
        const blogs=await Blog.find();
        console.log(blogs);
        if(!blogs) return res.status(200).json({data:'no data'})
        res.status(200).json({data:blogs})
    }
    catch(e){
        console.log(e);
    }
}

const addNewBlog=async(req,res)=>{
    const {body:{title,description,img}}=req;
    // const authorId= jwt.decode(process.env.SECRET_KEY, req.cookies.token)
    // console.log(authorId);
    const author='5ebd92e97243d83d4b7f14e9'
    try{
        const newBlog=await Blog.create({title,description,img,author})
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
        console.log(blogs);
        if(!blogs) return res.status(200).json({data:'error on delete'})
        res.status(200).json({data:'all blogs deleted!!'})
    }
    catch(e){
        console.log(e);
    }
}

module.exports={getAllBlogs,addNewBlog,deleteAllBlogs}