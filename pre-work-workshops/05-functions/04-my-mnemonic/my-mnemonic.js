// YOUR CODE BELOW

function myMnemonic(str1, str2, str3, str4) {
    var final = '';
    for (var i = 0; i < arguments.length; i++) {
        if (arguments[i]) {
            final += arguments[i][0].toUpperCase();
        }
    }
    return final;
}
