const { Schema, model } = require('mongoose');

const userSchema = new Schema({
    name:{
        type: String, 
        required: true 
    },
    email:{
        type:String,
        required:true
    },
	password: {
        type:String,
    },
    userId:{
        type:String
    },
    city:{
        type:String
    }
});

// creating a model so we can query it.
const Users = model('Users', userSchema);

module.exports = Users;