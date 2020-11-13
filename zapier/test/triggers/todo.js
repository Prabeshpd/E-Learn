const should = require('should');

const zapier = require('zapier-platform-core');

const App = require('../../index');
const appTester = zapier.createAppTester(App);
zapier.tools.env.inject();

describe('My App', () => {
	it('should run triggers.todo', async () => {
		const results = await appTester(App.triggers.todo.operation.perform);
		should.exist(results);
	});
});
