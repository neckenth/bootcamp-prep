// YOUR CODE BELOW

function oddCouple(array) {
    let newArray = [];
    for (var i = 0; i < array.length; i++) {
        if (array[i] % 2 !== 0) {
            newArray.push(array[i]);
        }
    }
    if (newArray.length > 2) {
        return newArray.slice(0, 2);
    } else {
        return newArray;
    }
}
