// YOUR CODE BELOW

function lastCharacter(str1, str2){
    if (str1.slice(str1.length - 1) === str2.slice(str2.length - 1)) {
        return true;
    } else {
        return false;
    }
}
