// YOUR CODE BELOW

function onlyOne(arg1, arg2, arg3) {
    let truthyCounter = 0;
    for (var i = 0; i < arguments.length; i++) {
        if (arguments[i]) {
            truthyCounter++;
        }
    }
    if (truthyCounter > 0 && truthyCounter < 2) {
        return true;
    } else {
        return false;
    }
}
