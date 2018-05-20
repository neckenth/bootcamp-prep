// YOUR CODE BELOW

function maxOfThree(num1, num2, num3) {
    let max = 0;
    for (var i = 0; i < arguments.length; i++) {
        if (arguments[i] > max) {
            max = arguments[i];
        }
    }
    return max;
}
