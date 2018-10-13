const bubbleSort = require("./index");

describe("bubbleSort", () => {
    it("should be defined", () => {
        expect(bubbleSort).toBeDefined();
    });

    it("should be a function", () => {
        expect(typeof bubbleSort).toEqual("function");
    });

    it("should sort array lowest to highest", () => {
        const arr = [
            5,
            16,
            11,
            9,
            3,
            18,
            8,
            13,
            2,
            10,
            7,
            17,
            14,
            1,
            12,
            19,
            4,
            15,
            6,
            20
        ];
        expect(bubbleSort(arr)).toEqual(arr.sort());
        expect(bubbleSort([5, 3, 8, 2, 1, 4])).toEqual([1, 2, 3, 4, 5, 8]);
    });

    it("should work with repeated numbers", () => {
        expect(bubbleSort([5, 5, 8, 2, 1, 1])).toEqual([1, 1, 2, 5, 5, 8]);
    });

    it("should work with negative numbers", () => {
        expect(bubbleSort([-5, 5, 8, 2, 1, -1])).toEqual([-5, -1, 1, 2, 5, 8]);
    });
});
