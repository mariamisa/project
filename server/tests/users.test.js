const tape = require('tape');
const connection = require('../database/connection');
const { createUser,deleteAll,findOne } = require('../database/queries/users');
tape('testing createUser query', (t) => {
	const user = {
        name: 'mariam',
        email:'mariam@gmail.com',
        password: '123456',
        city: 'gaza',
    };
    
    deleteAll().then(() => {
		createUser(user)
			.then(() => {
				createUser(user).then(res=>console.log('user created',res)).catch(console.log);
			})
			.catch((err) => console.log(err));
    });
    
    findOne('mariam@gmail.com')
    .then((res)=>console.log('email result found'))
    .catch((err) => console.log(err));
    
});