"use strict";

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var UUID = require("uuid-1345");
var crypto = require("crypto");
var HashIds = require("hashids");

var Crypto = (function () {
	function Crypto() {
		_classCallCheck(this, Crypto);
	}

	_createClass(Crypto, null, [{
		key: "getUUID",
		value: function getUUID() {
			return UUID.v4fast();
		}
	}, {
		key: "hash",
		value: function hash(value) {
			var shasum = crypto.createHash("sha1");
			shasum.update(value);
			return shasum.digest("hex");
		}
	}, {
		key: "encodeHashId",
		value: function encodeHashId() {
			for (var _len = arguments.length, options = Array(_len), _key = 0; _key < _len; _key++) {
				options[_key] = arguments[_key];
			}

			var content = options[0];
			var salt = undefined;
			if (options.length > 1) {
				content = options.splice(0, options.length - 1);
				var lastOption = options[options.length - 1];
				if (typeof lastOption === "string") {
					salt = lastOption;
				} else {
					content.push(lastOption);
				}
			}

			var hashIds = new HashIds(salt);
			return hashIds.encode(content);
		}
	}, {
		key: "decodeHashId",
		value: function decodeHashId() {
			var content = arguments[0];
			var salt = arguments[1];
			var hashIds = new HashIds(salt || undefined);
			return hashIds.decode(content);
		}
	}]);

	return Crypto;
})();

exports["default"] = Crypto;
module.exports = exports["default"];