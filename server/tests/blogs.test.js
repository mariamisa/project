const tape = require('tape');
const connection = require('../database/connection');
const {
	createBlogs,
	findAllBlogs,
	deleteAllBlogs,
} = require('../database/queries/blogs');
const { findOne, createUser, deleteAll } = require('../database/queries/users');

tape('testing createUser query', async (t) => {
	const user = {
        name: 'mariam',
        email:'mariam@gmail.com',
    };

	await deleteAll();
	await deleteAllPosts();
    const newUser = await createUser(user);
        const newBlog = await createBlogs({
            content: 'new blog',
            author: newUser._id,
        })
        console.log(111,newBlog);

    try{
        const findAllB = await findAllBlogs();
        console.log(111,findAllB);
    }catch(e){
        console.log(e);
    }
    // findAllBlogs().then(console.log).catch(console.log)
});