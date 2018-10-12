// function fibonacci(position) {
//     if (position <= 2) {
//         return 1;
//     }

//     return fibonacci(position - 2) + fibonacci(position - 1);
// }

function fibonacci(position, cache = {}) {
    if (position <= 2) {
        return 1;
    }

    if (!cache[position]) {
        return (cache[position] =
            fibonacci(position - 2, cache) + fibonacci(position - 1, cache));
    }

    return cache[position];
}

module.exports = fibonacci;
