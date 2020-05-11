const { Schema, model } = require('mongoose');

const blogSchema = new Schema({
	content: String,
	author: {
		type: Schema.Types.ObjectId,
		ref: 'Users',
	},
});

const Blogs = model('blogs', blogSchema);

module.exports = Blogs;