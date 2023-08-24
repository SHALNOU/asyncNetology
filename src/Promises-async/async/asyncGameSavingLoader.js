import read from './reader.js';
import json from './parser.js';

export default class GameSavingLoader {
	static async load() {
		try {
			const data = await read();

			const parsedValue = await json(data);

			return JSON.parse(parsedValue);


		} catch (error) {
			throw new Error("Не удалось загрузить сохранение игры: " + error.message);
		}
	}
}
