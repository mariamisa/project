const { Schema, model } = require('mongoose');

const blogSchema = new Schema({
	title:{
		type:String,
		required:true
	},
	img:{
		type:String,
		required:true

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
	authorName:{
		type:String,
	}
});

const Blogs = model('blogs', blogSchema);

module.exports = Blogs;