const config = require('../config');

/**
 * Fetch all the todos for the authenticated user
 *
 * @param {Object} z
 * @param {Object} bundle
 * @return {Array}
 */
const fetchTodos = async (z, bundle) => {
	const response = await z.request({
		url: `${config.API_BASE_URI}${config.endpoints.todos}`,
		headers: {
			Authentication: bundle.authData.Authentication,
		},
	});
	return response.data;
};

module.exports = {
	key: 'todo',
	noun: 'Todo',

	display: {
		label: 'New Todo',
		description: 'Triggers when a new todo is created.',
	},

	operation: {
		perform: fetchTodos,

		sample: {
			id: 1,
			task: 'Do this task',
			completed: false,
			deadline: new Date(),
		},

		outputFields: [
			{ key: 'task', label: 'Task' },
			{ key: 'deadline', label: 'Task Deadline' },
		],
	},
};
