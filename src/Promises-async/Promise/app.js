import GameSavingLoader from './GameSavingLoader.js';

export default function newGameSavingLoader() {
	const loader = new GameSavingLoader();
	loader.load()
		.then((gameSaving) => {
			console.log(gameSaving);
		})
		.catch((error) => {
			console.error(error);
		});

	return loader
}
newGameSavingLoader();

//not static 