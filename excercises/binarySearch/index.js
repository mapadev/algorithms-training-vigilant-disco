function binarySearch(numArray, key) {
    const midIndex = Math.floor(numArray.length / 2);
    const midValue = numArray[midIndex];

    if (midValue === key) {
        return true;
    } else if (midValue < key && numArray.length > 1) {
        return binarySearch(numArray.splice(midIndex + 1), key);
    } else if (midValue > key && numArray.length > 1) {
        return binarySearch(numArray.splice(0, midIndex), key);
    } else {
        return false;
    }
}

module.exports = binarySearch;
