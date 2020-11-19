const zapier = require('zapier-platform-core');

const App = require('../index');
const appTester = zapier.createAppTester(App);

zapier.tools.env.inject();

describe('Creates', () => {
	test('creates new todo', async () => {
		const bundle = {
			inputData: {
				task: 'Do homework',
				completed: false,
			},
		};

		const result = await appTester(App.creates.todo.operation.perform, bundle);

		expect(result.id).toBeTruthy();
		expect(result.task).toBe(bundle.inputData.task);
	});
});
