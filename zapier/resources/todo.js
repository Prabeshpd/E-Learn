const config = require('../config');

/**
 * Fetch all the todos for the authenticated user
 *
 * @param {Object} z
 * @param {Object} bundle
 * @return {Array}
 */
const performList = async (z, bundle) => {
	const response = await z.request({
		url: `${config.API_BASE_URI}/${config.endpoints.todos}`,
		params: {
			tag: bundle.inputData.tagName,
		},
		headers: {
			Authentication: bundle.authData.Authentication,
		},
	});

	return response.data;
};

/**
 * Create new todo item with provided input data
 *
 * @param {Object} z
 * @param {Object} bundle
 * @return {Object}
 */
const performCreate = async (z, bundle) => {
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

	list: {
		display: {
			label: 'New Todo',
			description: 'Lists the todos.',
		},
		operation: {
			perform: performList,
		},
	},

	create: {
		display: {
			label: 'Create Todo',
			description: 'Creates a new todo.',
		},
		operation: {
			inputFields: [{ key: 'name', required: true }],
			perform: performCreate,
		},
	},

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
};
