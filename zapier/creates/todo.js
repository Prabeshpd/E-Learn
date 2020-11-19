const config = require('../config');

/**
 * Create new todo item with provided input data
 *
 * @param {Object} z
 * @param {Object} bundle
 * @return {Object}
 */
const createTodo = async (z, bundle) => {
	const response = await z.request({
		method: 'POST',
		url: `${config.API_BASE_URI}/${config.endpoints.todos}`,
		body: {
			task: bundle.inputData.task,
			completed: bundle.inputData.completed || false,
		},
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
		label: 'Create new Todo',
		description: 'Creates a new todo, with provided input.',
	},

	operation: {
		perform: createTodo,

		inputFields: [
			{ key: 'task', label: 'Task Title', required: true },
			{
				key: 'completed',
				label: 'Is completed?',
				required: false,
				choices: [true, false],
			},
		],

		sample: {
			task: 'Fix the printer',
			completed: false,
		},

		outputFields: [
			{ key: 'task', label: 'Task Title' },
			{ key: 'completed', label: 'Is Completed?' },
		],
	},
};
