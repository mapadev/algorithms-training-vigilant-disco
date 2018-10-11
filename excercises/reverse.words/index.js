// function reverseWords(str) {
//     wordsArr = str.split(" ");

//     return wordsArr
//         .map(word => {
//             return word
//                 .split("")
//                 .reverse()
//                 .join("");
//         })
//         .join(" ");
// }

function reverseWords(str) {
    wordsArr = str.split(" ");

    return wordsArr
        .map(word => {
            let reversedWord = "";

            for (let char of word.split("")) {
                reversedWord = char + reversedWord;
            }

            return reversedWord;
        })
        .join(" ");
}

console.log(reverseWords("hello world"));

module.exports = reverseWords;
