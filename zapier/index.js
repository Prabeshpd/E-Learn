const todoResource = require('./resources/todo');

const getTodo = require('./triggers/todo');

const createTodo = require('./creates/todo');

module.exports = {
	version: require('./package.json').version,
	platformVersion: require('zapier-platform-core').version,

	triggers: {
		[getTodo.key]: getTodo,
	},

	creates: {
		[createTodo.key]: createTodo,
	},

	resources: {
		[todoResource.key]: todoResource,
	},
};
