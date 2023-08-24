import read from "./reader.js";
import json from "./parser.js";




export default class GameSavingLoader {
	load() {
		return read()
			.then((data) => json(data))
			.then((parseValue) => JSON.parse(parseValue))
			.catch((Error) => {
				throw new Error('error 40004')
			})
	}
}





