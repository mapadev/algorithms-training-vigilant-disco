const caesarCipher = require("./index");

describe("caesarCipher", () => {
    test("is defined", () => {
        expect(caesarCipher).toBeDefined();
    });

    test("is a function", () => {
        expect(typeof caesarCipher).toEqual("function");
    });

    test("properly ciphers text moving indexes forward", () => {
        expect(caesarCipher("abc", 1)).toEqual("bcd");
    });

    test("properly ciphers text moving indexes backward", () => {
        expect(caesarCipher("abc", -1)).toEqual("zab");
    });

    test("properly cycles indexes", () => {
        expect(caesarCipher("abc", 26)).toEqual("abc");
    });

    test("properly cycles large indexes forward ", () => {
        expect(caesarCipher("abc", 261)).toEqual("bcd");
    });

    test("properly cycles large indexes backward", () => {
        expect(caesarCipher("abc", -261)).toEqual("zab");
    });
});
