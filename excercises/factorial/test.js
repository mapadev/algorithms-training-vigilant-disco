const factorial = require("./index.js");

describe("Factorial", () => {
    test("is defined", () => {
        expect(factorial).toBeDefined();
    });

    test("is a function", () => {
        expect(typeof factorial).toEqual("function");
    });
});

describe("Calculates correctly", () => {
    test("factorial value for 1", () => {
        expect(factorial(1)).toEqual(1);
    });
    test("factorial value for 2", () => {
        expect(factorial(2)).toEqual(2);
    });
    test("factorial value for 3", () => {
        expect(factorial(3)).toEqual(6);
    });
    test("factorial value for 4", () => {
        expect(factorial(4)).toEqual(24);
    });
});
