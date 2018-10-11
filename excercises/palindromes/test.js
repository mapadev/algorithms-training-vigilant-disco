const isPalindrome = require("./index.js");

describe("isPalindrome", () => {
    test("is defined", () => {
        expect(isPalindrome).toBeDefined();
    });

    test("is a function", () => {
        expect(typeof isPalindrome).toEqual("function");
    });
});

describe("Works correctly", () => {
    test("with palindromes (1)", () => {
        expect(isPalindrome("rotor")).toBe(true);
    });

    test("with palindromes (2)", () => {
        expect(isPalindrome("Madam I'm Adam")).toBe(true);
    });

    test("with palindromes (3)", () => {
        expect(isPalindrome("A nut for a jar of tuna.")).toBe(true);
    });

    test("with palindromes (4)", () => {
        expect(
            isPalindrome(
                "On a clover, if alive, erupts a vast, pure evil; a fire volcano."
            )
        ).toBe(true);
    });

    test("with NOT a palindrome", () => {
        expect(isPalindrome("The answer to everything is: 42.")).toBe(false);
    });
});
