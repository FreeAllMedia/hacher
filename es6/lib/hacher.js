const UUID = require("uuid-1345");
const crypto = require("crypto");
const HashIds = require("hashids");

export default class Crypto {
	static getUUID() {
		return UUID.v4fast();
	}

	static hash(value) {
		const shasum = crypto.createHash("sha1");
		shasum.update(value);
		return shasum.digest("hex");
	}

	static encodeHashId(...options) {
		let content = options[0];
		let salt;
		if(options.length > 1) {
			content = options.splice(0, (options.length - 1));
			const lastOption = options[options.length - 1];
			if(typeof lastOption === "string") {
				salt = lastOption;
			} else {
				content.push(lastOption);
			}
		}

		const hashIds = new HashIds(salt);
		return hashIds.encode(content);
	}

	static decodeHashId(...options) {
		const content = options[0];
		const salt = options[1];
		const hashIds = new HashIds(salt || undefined);
		return hashIds.decode(content);
	}
}
