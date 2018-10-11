function isPalindrome(string) {
    // return (
    //     string.toLowerCase() ===
    //     string
    //         .toLowerCase()
    //         .split("")
    //         .reverse()
    //         .join("")
    // );

    const cleanArr = string
        .toLowerCase()
        .split("")
        .filter(char => char.match(/[a-z]/));

    return cleanArr.join("") === cleanArr.reverse().join("");
}

console.log(isPalindrome("rotoR"));

module.exports = isPalindrome;
