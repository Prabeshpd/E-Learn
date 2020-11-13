require('./env');

module.exports = {
	API_BASE_URI: process.env.API_BASE_URI,
	endpoints: {
		todos: '/todos',
		todo: '/todo',
	},
};
