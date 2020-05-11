const tape = require('tape');
const connection = require('../database/connection');
const { createUser,deleteAll,findOne } = require('../database/queries/users');
// mongoose.createConnection(connection)
tape('testing createUser query', (t) => {
	const user = {
        name: 'mariam',
        email:'mariam@gmail.com',
        password: '123456',
        city: 'gaza',
        tsp:`${Date.now()}`
    };
    
    deleteAll().then(() => {
		createUser(user)
			.then(() => {
				createUser(user).then(console.log).catch(console.log);
			})
			.catch((err) => console.log(err));
    });
    findOne('mariam@gmail.com')
    .then((res)=>console.log('success',res))
    .catch((err) => console.log(err));
    
	createUser(user)
		.then((res) => console.log('success', res))
		.catch((err) => console.log(err));
});