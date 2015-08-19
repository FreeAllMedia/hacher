import jwt from "jsonwebtoken";

export default class JsonWebToken {
  static sign(...options) {
    return jwt.sign(...options);
  }

  static verify(...options) {
    return jwt.verify(...options);
  }

  static decode(...options) {
    return jwt.decode(...options);
  }
}
