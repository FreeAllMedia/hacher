import crypto from "../lib/hacher.js";

//tentative module to use: https://www.npmjs.com/package/uuid-1345
describe("crypto", () => {
	describe("(static methods)", () => {
		describe(".getUUID()", () => {
			it("should get a UUID hash according to the RFC 4122 v4 (random) by default with no args", () => {
				crypto.getUUID().length.should.be.greaterThan(0);
			});
		});

		describe(".hash(string)", () => {
			it("should hash a string with a proper secure hash algorithm", () => {
				crypto.hash("somestring").length.should.be.greaterThan(0);
			});
		});

		describe("(Hashids)", () => {
			describe(".encodeHashId", () => {
				it("should encode with numbers and a salt", () => {
					crypto.encodeHashId(1, 2, 3, "salt").should.be.a.String;
				});
			});

			describe(".decodeHashId", () => {
				it("should decode with numbers and a salt", () => {
					crypto.decodeHashId("hash", "salt").should.be.instanceOf(Array);
				});
			});

			describe("(functionality)", () => {
				it("should encode and decode correctly", () => {
					const originalValue = 129;
					const salt = "salt";
					const encodedValues = crypto.encodeHashId(originalValue, salt);
					const reDecodedValue = crypto.decodeHashId(encodedValues, salt);
					reDecodedValue.should.eql([originalValue]);
				});

				it("should encode and decode correctly many numbers as well", () => {
					const originalValues = [129, 123];
					const salt = "salt";
					const encodedValues = crypto.encodeHashId(...originalValues, salt);
					const reDecodedValue = crypto.decodeHashId(encodedValues, salt);
					reDecodedValue.should.eql(originalValues);
				});

				it("should encode and decode correctly many numbers with no salt specified", () => {
					const originalValues = [129, 123];
					const encodedValues = crypto.encodeHashId(...originalValues);
					const reDecodedValue = crypto.decodeHashId(encodedValues);
					reDecodedValue.should.eql(originalValues);
				});
			});
		});
	});
});
