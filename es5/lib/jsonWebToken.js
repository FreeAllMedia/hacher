"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var _jsonwebtoken = require("jsonwebtoken");

var _jsonwebtoken2 = _interopRequireDefault(_jsonwebtoken);

var JsonWebToken = (function () {
  function JsonWebToken() {
    _classCallCheck(this, JsonWebToken);
  }

  _createClass(JsonWebToken, null, [{
    key: "sign",
    value: function sign() {
      return _jsonwebtoken2["default"].sign.apply(_jsonwebtoken2["default"], arguments);
    }
  }, {
    key: "verify",
    value: function verify() {
      return _jsonwebtoken2["default"].verify.apply(_jsonwebtoken2["default"], arguments);
    }
  }, {
    key: "decode",
    value: function decode() {
      return _jsonwebtoken2["default"].decode.apply(_jsonwebtoken2["default"], arguments);
    }
  }]);

  return JsonWebToken;
})();

exports["default"] = JsonWebToken;
module.exports = exports["default"];