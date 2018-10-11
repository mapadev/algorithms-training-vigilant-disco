// function twoSum(numArray, sum) {
//     const pairs = [];

//     const hashtable = [];

//     for (let num of numArray) {
//         if (hashtable.includes(sum - num)) {
//             pairs.push([num, sum - num]);
//         }

//         if (!hashtable.includes(num)) {
//             hashtable.push(num);
//         }
//     }

//     return pairs;
// }

function twoSum(numArray, sum) {
    const pairs = [];

    const hashtable = new Set();

    for (let num of numArray) {
        if (hashtable.has(sum - num)) {
            pairs.push([num, sum - num]);
        }

        hashtable.add(num);
    }

    return pairs;
}

console.log(twoSum([1, 2, 3, 4, 5, 7, 8, 2], 10));
