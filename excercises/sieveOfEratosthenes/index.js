function sieveOfEratosthenes(num) {
    const primes = [];
    primes.length = num;
    primes.fill(true);

    primes[0] = false;
    primes[1] = false;

    for (let i = 2; i < Math.sqrt(num); i++) {
        // for (let j = 2; j * i <= num; j++) {
        //     primes[i * j] = false;
        // }

        if (primes[i]) {
            for (let j = 2; j * i <= num; j++) {
                primes[i * j] = false;
            }
        }
    }

    const result = [];

    for (let i = 0; i < primes.length; i++) {
        if (primes[i]) {
            result.push(i);
        }
    }

    return result;
}

module.exports = sieveOfEratosthenes;
