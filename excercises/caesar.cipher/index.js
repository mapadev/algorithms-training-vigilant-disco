function caesarCipher(str, num) {
    const alphabet = "abcdefghijklmnopqrstuvwxyz";
    let result = "";
    num = num % alphabet.length;

    str.split("").forEach(char => {
        if (char === " ") {
            result += char;
            return;
        }

        const alphabetIndex = alphabet.indexOf(char.toLowerCase());

        let cipheredLetterIndex = alphabetIndex + num;

        if (cipheredLetterIndex > alphabet.length - 1) {
            cipheredLetterIndex = cipheredLetterIndex - alphabet.length;
        } else if (cipheredLetterIndex < 0) {
            cipheredLetterIndex = cipheredLetterIndex + alphabet.length;
        }

        if (char.match(/[A-Z]/)) {
            result += alphabet[cipheredLetterIndex].toUpperCase();
        } else {
            result += alphabet[cipheredLetterIndex];
        }
    });

    return result;
}

console.log(caesarCipher("doM zaz", 1));

module.exports = caesarCipher;
