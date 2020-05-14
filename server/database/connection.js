const mongoose = require('mongoose');
require('dotenv').config();

let dbUrl;
const {env:{NODE_ENV,TEST_DB_URL,DATABASE_URL,DB_URL}}=process;

switch(NODE_ENV){
	case 'test': 
		dbUrl=TEST_DB_URL
		break
	case 'production':
		dbUrl=DATABASE_URL
		break
	default:
		dbUrl=DB_URL
}

mongoose
	.connect(dbUrl, { useNewUrlParser: true, useUnifiedTopology: true })
	.then(() => console.log('database connection successful'))
	.catch((err) => console.log(err));

module.exports = mongoose.connection;