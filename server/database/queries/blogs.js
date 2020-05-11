const blogs = require('../models/blogs');

const aBlogsQueries = {};

aBlogsQueries.createBlogs = ({ content, author }) => {
	return blogs.create({ content, author });
};

aBlogsQueries.findAllBlogs = () => {
	return blogs.find();
};
// aBlogsQueries.findBlogsByUser = () => {
// 	return blogs.find({});
// };

aBlogsQueries.deleteAllBlogs = () => {
	return blogs.deleteMany({});
};

module.exports = aBlogsQueries;
