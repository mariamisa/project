const { Schema, model } = require('mongoose');

const userSchema = new Schema({
    name:  { type: 'string', required: true },
    email:'string',
	password: 'string',
    city: 'string'
});

// creating a model so we can query it.
const Users = model('Users', userSchema);

module.exports = Users;