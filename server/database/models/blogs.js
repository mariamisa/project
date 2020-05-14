const { Schema, model } = require('mongoose');

const blogSchema = new Schema({
	title:{
		type:String,
		required:true
	},
	img:{
		type:String,
	},
	description:{
		type:String,
		required:true
	},
	date:{
		type:Date,
		default:Date.now
	},
	author: {
		type: Schema.Types.ObjectId,
		ref: 'Users',
	},
});

const Blogs = model('blogs', blogSchema);

module.exports = Blogs;