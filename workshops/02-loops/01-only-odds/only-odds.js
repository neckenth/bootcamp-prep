// YOUR CODE BELOW
function onlyOdds(n) {
    let sum = 0;
    while (n >= 1) {
        if (n % 2 !== 0) {
            sum += n;
        }
        n--;
    }
    return sum
}