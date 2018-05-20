// YOUR CODE BELOW

function exponentiate(base, power) {
    let counter = 1;
    let result = base;
    if (power === 0) {
        return 1;
    } else {
        while (counter < power) {
            result *= base;
            counter++;
        }
    }
    return result;
}
