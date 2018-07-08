// YOUR CODE BELOW
function zeroDarkThirty(n) {
    let finalNum = '';
    let numString = n.toString();
    if (n === 0) {
        return NaN;
    }
    for (let i = 0; i < numString.length; i++) {
        if (Number(numString[i]) !== 0) {
            finalNum += numString[i];
        }
    }
    return Number(finalNum);
}