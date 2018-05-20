// YOUR CODE BELOW
function getMax(num1, num2, num3) {
    if (num1 > num2) {
        if (num2 > num3) {
            return num1;
        } 
        return num1;
    } else if (num2 > num3) {
        return num2;
    } else {
        return num3;
    }
}
