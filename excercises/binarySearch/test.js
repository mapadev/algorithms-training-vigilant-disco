const binarySearch = require("./index");

describe("binarySearch", () => {
    it("should be defined", () => {
        expect(binarySearch).toBeDefined();
    });

    it("should be a funtion", () => {
        expect(typeof binarySearch).toEqual("function");
    });

    it("should find element in provided array", () => {
        expect(binarySearch([5, 7, 12, 16, 36, 39, 42, 56, 71], 56)).toBe(true);
    });

    it("should return false when array doesn't include searched element", () => {
        expect(binarySearch([1, 20, 35, 56], 42)).toBe(false);
    });
});
