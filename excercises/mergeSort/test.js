const mergeSort = require("./index");

const testArraySorted = [];

for (let i = 1; i <= 1000; i++) {
    testArraySorted.push(i);
}

function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]]; // eslint-disable-line no-param-reassign
    }
}

const testArrayRandom = [...testArraySorted];
shuffleArray(testArrayRandom);

describe("mergeSort", () => {
    it("should be defined", () => {
        expect(mergeSort).toBeDefined();
    });

    it("should be a function", () => {
        expect(typeof mergeSort).toEqual("function");
    });

    it("should sort array lowest to highest", () => {
        expect(mergeSort([5, 1, 3, 6, 2, 4, 8, 10, 9, 7])).toEqual([
            1,
            2,
            3,
            4,
            5,
            6,
            7,
            8,
            9,
            10
        ]);
    });

    it("should sort array lowest to highest", () => {
        expect(mergeSort(testArrayRandom)).toEqual(testArraySorted);
    });
});
