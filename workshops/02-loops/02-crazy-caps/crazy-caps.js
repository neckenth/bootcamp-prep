// YOUR CODE BELOW
function crazyCaps(str) {
    let final = str[0];
    for (let i = 1; i < str.length; i++) {
        if (i % 2 !== 0) {
            final += str[i].toUpperCase();
        } else {
            final += str[i];
        }
    }
    return final;
}
