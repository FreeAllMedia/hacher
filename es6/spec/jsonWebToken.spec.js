import crypto from "../../";
import sinon from "sinon";

describe("Json Web Token", () => {
  let payload,
    secret,
    options,
    token,
    clock;

  beforeEach(() => {
    clock = sinon.useFakeTimers();
    payload = {
      name: "Bender",
      type: "robot"
    };

    secret = "benderIsEvil";
    options = {expiresInSeconds: 60};
    token = crypto.jsonWebToken.sign(payload, secret, options);
  });

  afterEach(() => {
    clock.restore();
  });

  describe(".sign(payload, secret, options)", () => {
    it("should sign a json payload and return a json web token", () => {
      token.length.should.be.greaterThan(0);
    });
  });

  describe(".verify(token, secret[, options, callback])", () => {
    it("should verify a json payload and return a json web token", () => {
      () => {
        crypto.jsonWebToken.verify(token, secret, options);
      }.should.not.throw();
    });

    it("should throw if the token is expired", () => {
      clock.tick(60001);
      () => {
        crypto.jsonWebToken.verify(token, secret, options);
      }.should.throw("TokenExpiredError: jwt expired");
    });

    it("should throw if an invalid secret is supplied", () => {
      () => {
        crypto.jsonWebToken.verify(token, "benderIsNice", options);
      }.should.throw("JsonWebTokenError: invalid signature");
    });

    it("should throw if an invalid token is supplied", () => {
      () => {
        crypto.jsonWebToken.verify("invalidToken", secret, options);
      }.should.throw("JsonWebTokenError: jwt malformed");
    });
  });

  describe(".decode(token, options)", () => {
    it("should decode a json payload and return a json web token", () => {
      crypto.jsonWebToken.decode(token).should.eql(payload);
    });
  });
});
