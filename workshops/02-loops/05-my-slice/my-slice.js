// YOUR CODE BELOW
function mySlice(originalString, startIdx, endIdx) {
    let final = '';
    if (startIdx === undefined) {
        startIdx = 0;
    }
    if (endIdx === undefined) {
        endIdx = originalString.length;
    }
    for (let i = startIdx; i < endIdx; i++) {
        final += originalString[i];
    }
    return final;
}