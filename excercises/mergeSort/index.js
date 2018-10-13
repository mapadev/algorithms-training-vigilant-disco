function mergeSort(arr) {
    if (arr.length < 2) {
        return arr;
    }

    const middleIndex = Math.floor(arr.length / 2);
    const firstHalf = arr.slice(0, middleIndex);
    const secondHalf = arr.slice(middleIndex);

    return merge(mergeSort(firstHalf), mergeSort(secondHalf));
}

function merge(array1, array2) {
    let result = [];

    while (array1.length && array2.length) {
        if (array1[0] < array2[0]) {
            result.push(array1.shift());
        } else {
            result.push(array2.shift());
        }
    }

    if (array1.length) {
        result = result.concat(array1);
    } else {
        result = result.concat(array2);
    }

    return result;
}

module.exports = mergeSort;
