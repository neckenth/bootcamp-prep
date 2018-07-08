// YOUR CODE BELOW
function bacteriaTime(currentNum, targetNum) {
    let mins = 0;
    if (currentNum > targetNum) {
        return 'targetNum must be larger than currentNum';
    }
    while (currentNum < targetNum) {
        currentNum *= 2;
        mins += 20;
    }
    return mins;
}