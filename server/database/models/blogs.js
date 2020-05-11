const { Schema, model } = require('mongoose');

const blogSchema = new Schema({
	title:String,
	img:String,
	content: String,
	tsp:'string',
	author: {
		type: Schema.Types.ObjectId,
		ref: 'Users',
	},
});

const Blogs = model('blogs', blogSchema);

module.exports = Blogs;