const blogs = require('../models/blogs');

const aBlogsQueries = {};

aBlogsQueries.createBlogs = ({ title, author,description }) => {
	return blogs.create({ title, author,description });
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
