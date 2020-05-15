const {register,getAllUsers,login,logout,deleteAllUsers}=require('./user');
const {getAllBlogs,addNewBlog,deleteAllBlogs}=require('./blog/blogs')


module.exports={register,getAllUsers,login,logout,getAllBlogs,addNewBlog,deleteAllBlogs,deleteAllUsers}