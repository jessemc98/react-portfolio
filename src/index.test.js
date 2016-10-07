import expect from 'expect'

describe('mocha', function() {
	it('should run this test', function() {
		expect(1).toBeA('number')
		expect(1).toEqual(1)
	});
});