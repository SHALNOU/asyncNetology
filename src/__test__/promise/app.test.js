import newGameSavingLoader from "../../Promises-async/Promise/app.js"

test('default test promise js', async () => {

	const result = newGameSavingLoader()
	const loader = await result.load()

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


	expect(loader).toEqual(expected)

})

