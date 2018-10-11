function meanMedianMode(arr) {
    return {
        mean: getMean(arr),
        median: getMedian(arr),
        mode: getMode(arr)
    };
}

function getMean(arr) {
    const sum = arr.reduce((sum, num) => {
        return sum + num;
    }, 0);

    return sum / arr.length;
}

function getMedian(arr) {
    arr.sort((a, b) => {
        return a - b;
    });

    let median;

    if (arr.length % 2 !== 0) {
        median = arr[Math.floor(arr.length / 2)];
    } else {
        const med1 = arr[Math.floor(arr.length / 2)];
        const med2 = arr[arr.length / 2 - 1];

        median = (med1 + med2) / 2;
    }

    return median;
}

function getMode(arr) {
    const modeObj = {};

    arr.forEach(num => {
        if (!modeObj[num]) {
            modeObj[num] = 0;
        }

        modeObj[num]++;
    });

    let maxFrequency = 0;
    let modes = [];

    for (let item in modeObj) {
        if (modeObj[item] > maxFrequency) {
            maxFrequency = modeObj[item];
            modes = [item];
        } else if (modeObj[item] === maxFrequency) {
            modes.push(item);
        }
    }

    if (modes.length === Object.keys(modeObj).length) {
        modes = [];
    }

    return modes;
}

console.log(meanMedianMode([1, 2, 3, 4, 5, 4, 6, 1]));
console.log(meanMedianMode([9, 10, 23, 10, 23, 9]));

module.exports = { meanMedianMode, getMean, getMedian, getMode };
