const M = require("./index");
const meanMedianMode = M.meanMedianMode;
const getMean = M.getMean;
const getMedian = M.getMedian;
const getMode = M.getMode;

describe("meanMedianMode", () => {
    it("should be defined", () => {
        expect(meanMedianMode).toBeDefined();
    });

    test("should be a function", () => {
        expect(typeof meanMedianMode).toEqual("function");
    });

    it("should return object", () => {
        expect(typeof meanMedianMode([1, 2, 3])).not.toBeNull();
        expect(typeof meanMedianMode([1, 2, 3])).toEqual("object");
    });

    it("should get mean, median and mode values", () => {
        const testArr = [1, 2, 3, 4, 5, 4, 6, 1];
        const expectedResult = {
            mean: 3.25,
            median: 3.5,
            mode: ["1", "4"]
        };
        expect(meanMedianMode(testArr)).toEqual(expectedResult);
    });
});

describe("getMean", () => {
    it("should calculate mean value", () => {
        const testArr = [1, 2, 3, 4, 5, 4, 6, 1];
        expect(getMean(testArr)).toEqual(3.25);
    });
});

describe("getMedian", () => {
    it("should calculate median value", () => {
        const testArr = [1, 2, 3, 4, 5, 4, 6, 1];
        expect(getMedian(testArr)).toEqual(3.5);
    });
});

describe("getMode", () => {
    it("should return array", () => {
        const testArr = [1, 2, 3, 4, 5, 4, 6, 1];
        expect(Array.isArray(getMode(testArr))).toBe(true);
    });

    it("should calculate modes", () => {
        const testArr = [1, 2, 3, 4, 5, 4, 6, 1];
        expect(getMode(testArr)).toEqual(["1", "4"]);
    });

    it("should return empty array if no modes", () => {
        const testArr = [9, 10, 23, 10, 23, 9];
        expect(getMode(testArr)).toEqual([]);
    });
});
