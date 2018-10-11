const harmlessRansomNote = require("./index.js");

describe("harmlessRansomNote", () => {
    test("is defined", () => {
        expect(harmlessRansomNote).toBeDefined();
    });

    test("is a function", () => {
        expect(typeof harmlessRansomNote).toEqual("function");
    });

    test("works correclty when there are enough words in magazine to make note", () => {
        const noteText = "this is a secret note for you from a secret admirer";
        const magazineText =
            "puerto rico is a place of great wonder and excitement it has many secret waterfall locations that i am an admirer of you must hike quite a distance to find the secret places as they are far from populated areas but it is worth the effort a tip i have for you is to go early in the morning when it is not so hot out also note that you must wear hiking boots this is one of the best places i have ever visited";

        expect(harmlessRansomNote(noteText, magazineText)).toBe(true);
    });

    test("works correclty when there aren't enough words (missing: note)", () => {
        const noteText = "this is a secret note for you from a secret admirer";
        const magazineText =
            "puerto rico is a place of great wonder and excitement it has many secret waterfall locations that i am an admirer of you must hike quite a distance to find the secret places as they are far from populated areas but it is worth the effort a tip i have for you is to go early in the morning when it is not so hot out also that you must wear hiking boots this is one of the best places i have ever visited";

        expect(harmlessRansomNote(noteText, magazineText)).toBe(false);
    });

    test("works correclty when there aren't enough words (no second: secret)", () => {
        const noteText = "this is a secret note for you from a secret admirer";
        const magazineText =
            "puerto rico is a place of great wonder and excitement it has many waterfall locations that i am an admirer of you must hike quite a distance to find the secret places as they are far from populated areas but it is worth the effort a tip i have for you is to go early in the morning when it is not so hot out also note that you must wear hiking boots this is one of the best places i have ever visited";

        expect(harmlessRansomNote(noteText, magazineText)).toBe(false);
    });
});
