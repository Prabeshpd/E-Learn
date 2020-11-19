const zapier = require('zapier-platform-core');

const App = require('../index');
const appTester = zapier.createAppTester(App);

zapier.tools.env.inject();

describe('Triggers', () => {
	test('fetches todos of  a user', async () => {
		const bundle = {
			inputData: {},
			authData: {},
		};

		const result = await appTester(App.triggers.todo.operation.perform);

		expect(result.length).toBeGreaterThan(0);

		const firstTask = result[0]['task'];

		expect(firstTask).toBe('Do homework');
	});
});
