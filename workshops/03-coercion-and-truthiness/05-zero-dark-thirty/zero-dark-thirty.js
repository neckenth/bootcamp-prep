// YOUR CODE BELOW

function zeroDarkThirty(num) {
    var final = '';
    if (num === 0) {
        return NaN;
    } else {
        let numString = String(num);
        for (var i = 0; i < numString.length; i++) {
            if (Number(numString[i]) !== 0) {
                final += numString[i];
            }
        }
    }
    return Number(final);
}
