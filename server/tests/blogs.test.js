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
        password:"569875555",
    };

	await deleteAll();
	await deleteAllBlogs();
    const newUser = await createUser(user);
        const newBlog = await createBlogs({
            title:'hi from title',
            description: 'new blog',
            author: newUser._id,
        })
        console.log('create new blogs',newBlog);

    try{
        const findAllB = await findAllBlogs();
        console.log('findAllBlogs',findAllB);
    }catch(e){
        console.log(e);
    }
    // findAllBlogs().then(console.log).catch(console.log)
});