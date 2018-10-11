const twoSum = require("./index");

describe("twoSum", () => {
    test("should be defined", () => {
        expect(twoSum).toBeDefined();
    });

    test("should be a function", () => {
        expect(typeof twoSum).toEqual("function");
    });

    test("should return array", () => {
        expect(Array.isArray(twoSum([1, 2, 3], 5))).toBe(true);
    });

    test("should calculate pairs of numbers equal to provided sum ", () => {
        expect(twoSum([1, 6, 4, 5, 3, 3], 7)).toEqual([[6, 1], [3, 4], [3, 4]]);
        expect(twoSum([40, 11, 19, 17, -12], 28)).toEqual([
            [17, 11],
            [-12, 40]
        ]);
    });
});
