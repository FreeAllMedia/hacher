"use strict";

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var _ = require("../../");

var _2 = _interopRequireDefault(_);

var _sinon = require("sinon");

var _sinon2 = _interopRequireDefault(_sinon);

describe("Json Web Token", function () {
  var payload = undefined,
      secret = undefined,
      options = undefined,
      token = undefined,
      clock = undefined;

  beforeEach(function () {
    clock = _sinon2["default"].useFakeTimers();
    payload = {
      name: "Bender",
      type: "robot"
    };

    secret = "benderIsEvil";
    options = { expiresInSeconds: 60 };
    token = _2["default"].jsonWebToken.sign(payload, secret, options);
  });

  afterEach(function () {
    clock.restore();
  });

  describe(".sign(payload, secret, options)", function () {
    it("should sign a json payload and return a json web token", function () {
      token.length.should.be.greaterThan(0);
    });
  });

  describe(".verify(token, secret[, options, callback])", function () {
    it("should verify a json payload and return a json web token", function () {
      (function () {
        _2["default"].jsonWebToken.verify(token, secret, options);
      }).should.not["throw"]();
    });

    it("should throw if the token is expired", function () {
      clock.tick(60001);
      (function () {
        _2["default"].jsonWebToken.verify(token, secret, options);
      }).should["throw"]("TokenExpiredError: jwt expired");
    });

    it("should throw if an invalid secret is supplied", function () {
      (function () {
        _2["default"].jsonWebToken.verify(token, "benderIsNice", options);
      }).should["throw"]("JsonWebTokenError: invalid signature");
    });

    it("should throw if an invalid token is supplied", function () {
      (function () {
        _2["default"].jsonWebToken.verify("invalidToken", secret, options);
      }).should["throw"]("JsonWebTokenError: jwt malformed");
    });
  });

  describe(".decode(token, options)", function () {
    it("should decode a json payload and return a json web token", function () {
      _2["default"].jsonWebToken.decode(token).should.eql(payload);
    });
  });
});