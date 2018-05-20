// YOUR CODE BELOW

function crazyCaps(str) {
    var final = str[0];
    for (var i = 1; i < str.length; i++) {
        if (i % 2 !== 0) {
            final += str[i].toUpperCase();
        } else {
            final += str[i].toLowerCase();
        }
    }
    return final;
}
