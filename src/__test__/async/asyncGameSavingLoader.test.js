import asyncGameSavingLoader from '/Users/macbookair/Desktop/asyncNetology/src/Promises-async/async/asyncGameSavingLoader.js';

jest.setTimeout(15000);

test('should return promise for load()', async () => {
	const result = await asyncGameSavingLoader.load();
	const expected = {
		id: 9,
		created: 1546300800,
		userInfo: {
			id: 1,
			name: 'Hitman',
			level: 10,
			points: 2000,
		},
	};
	expect(result).toEqual(expected);
}, 10000);

test('should catch an error for load()', async () => {
	asyncGameSavingLoader.load = jest.fn().mockRejectedValue(new Error('Test error'));

	try {
		await asyncGameSavingLoader.load();
	} catch (error) {
		expect(error.message).toBe('Test error');
	}
}, 10000);
