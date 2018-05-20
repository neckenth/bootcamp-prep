// YOUR CODE BELOW

function howEqual(arg1, arg2) {
    if (typeof arg1 === typeof arg2) {
        if (arg1 === arg2) {
            return 'strictly';
        } else {
            return 'not equal';
        }
    } else {
        if (arg1 == arg2) {
            return 'loosely';
        }
    }
    return 'not equal';
}
