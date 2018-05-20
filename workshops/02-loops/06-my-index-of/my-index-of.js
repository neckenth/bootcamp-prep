// YOUR CODE BELOW

function myIndexOf(source, searchValue, startIdx) {
    debugger;
    if (startIdx === undefined) {
        startIdx = 0;
    }
    for (var i = startIdx; i < source.length; i++) {
        if (source.slice(i, i + searchValue.length) === searchValue) {
            return i;
        }
    }
    return -1;
}

myIndexOf('twice twice', 'ice', 5);
