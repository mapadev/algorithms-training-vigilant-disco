const reverseArrayInPlace = require("./index");

describe("reverseArrayInPlace", () => {
    test("is defined", () => {
        expect(reverseArrayInPlace).toBeDefined();
    });

    test("is a function", () => {
        expect(typeof reverseArrayInPlace).toEqual("function");
    });

    test("reverses array elements", () => {
        const arr = [1, 2, 3, 4, 5, 6];
        expect(reverseArrayInPlace(arr)).toEqual(arr.reverse());
    });
});
