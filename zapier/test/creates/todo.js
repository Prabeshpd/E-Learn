const should = require('should');

const zapier = require('zapier-platform-core');

const App = require('../../index');
const appTester = zapier.createAppTester(App);
zapier.tools.env.inject();

describe('My App', () => {
	it('should run creates.todo', async () => {
		const bundle = {
			inputData: {
				task: 'Do homework',
				completed: false,
			},
		};

		const results = await appTester(App.creates.todo.operation.perform, bundle);
		should.exist(results);
	});
});
