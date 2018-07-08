// YOUR CODE BELOW
function myIndexOf(source, searchValue, startIdx) {
    if (startIdx === undefined) {
        startIdx = 0;
    }
    for (let i = startIdx; i < source.length; i++) {
        if (source[i] === searchValue[0]) {
            if (source.slice(i, i + searchValue.length) === searchValue) {
                return i;
            }
        }
    }
    return -1;
}