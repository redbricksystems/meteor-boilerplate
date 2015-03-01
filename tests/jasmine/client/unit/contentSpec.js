/**
*	Running tests on helloWorldService
*   You can add more tests according to your specifications
*/
describe('helloWorldService', function() {
	'use strict';
	describe('getContent', function () {
		it('should return an defined object of string', function () {

			var content = helloWorldService.getContent();
			expect(content).toBeDefined();
			expect(typeof content).toBe('string');
		});
	});
});