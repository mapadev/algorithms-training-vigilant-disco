const fibonacci = require("./index");

describe("fibonacci", () => {
    it("should be defined", () => {
        expect(fibonacci).toBeDefined();
    });

    it("should be a function", () => {
        expect(typeof fibonacci).toEqual("function");
    });

    it("should calculate fibonacci series", () => {
        expect(fibonacci(4)).toEqual(3);
        expect(fibonacci(9)).toEqual(34);
    });
});
