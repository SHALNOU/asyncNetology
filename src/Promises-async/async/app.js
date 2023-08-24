import asyncGameSavingLoader from './asyncGameSavingLoader.js';

asyncGameSavingLoader.load()
	.then((saving) => {
		console.log(saving);
	})
	.catch((error) => {
		console.error(error);
	});

	//static