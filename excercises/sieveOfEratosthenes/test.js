const soe = require("./index");

describe("sieveOfEratosthenes is defined", () => {
    it("should be defined", () => {
        expect(soe).toBeDefined();
    });

    it("should calculate primes", () => {
        expect(soe(20)).toEqual([2, 3, 5, 7, 11, 13, 17, 19]);
    });
});
