function fizzBuzz(num, fizzNum = 3, buzzNum = 5) {
    for (let i = 1; i <= num; i++) {
        if (i % fizzNum === 0 && i % buzzNum === 0) {
            console.log("fizzbuzz");
        } else if (i % fizzNum === 0) {
            console.log("fizz");
        } else if (i % buzzNum === 0) {
            console.log("buzz");
        } else {
            console.log(i);
        }
    }
}

fizzBuzz(20, 3, 5);

module.exports = fizzBuzz;
