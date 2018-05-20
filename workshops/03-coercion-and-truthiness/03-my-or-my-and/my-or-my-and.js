// YOUR CODE BELOW

function myOr(arg1, arg2, arg3) {
    for (var i = 0; i < arguments.length; i++) {
        if (arguments[i]) {
            return arguments[i];
        }
    }
    return arg3;
}

function myAnd(arg1, arg2, arg3) {
    for (var i = 0; i < arguments.length; i++) {
        if (!(arguments[i])) {
            return arguments[i];
        }
    }
    return arg3;
}
