// YOUR CODE BELOW

function myLastIndexOf(array, searchValue, startIdx) {
    if (startIdx === undefined) {
        startIdx = array.length - 1;
    }
    for (var i = startIdx; i >= 0; i--) {
        if (array[i] === searchValue) {
            return i;
        }
    }
    return -1;
}