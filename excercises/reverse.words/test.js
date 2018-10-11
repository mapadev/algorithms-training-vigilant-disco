const reverseWords = require("./index");

describe("reverseWords", () => {
    test("is defined", () => {
        expect(reverseWords).toBeDefined();
    });

    test("is a function", () => {
        expect(typeof reverseWords).toEqual("function");
    });

    test("properly reverses words", () => {
        expect(reverseWords("superman and batman")).toEqual(
            "namrepus dna namtab"
        );
    });

    test("properly reverses words with uppercase letters", () => {
        expect(reverseWords("Learning Algorithms")).toEqual(
            "gninraeL smhtiroglA"
        );
    });
});
