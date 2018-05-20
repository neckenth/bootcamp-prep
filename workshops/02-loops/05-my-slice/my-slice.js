// YOUR CODE BELOW

function mySlice(originalString, startIdx, endIdx) {
    let slice = '';
    if (startIdx === undefined) {
        startIdx = 0;
    }
    if (endIdx === undefined) {
        endIdx = originalString.length;
    }
    for (var i = startIdx; i < endIdx; i++) {
        slice += originalString[i];
    }
    return slice;
}
