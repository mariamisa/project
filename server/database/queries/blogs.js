const blogs = require('../models/blogs');

const aBlogsQueries = {};

aBlogsQueries.createBlogs = ({ title, author,img,description }) => {
	return blogs.create({ title, author,img,description });
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
