// YOUR CODE BELOW

function defaultGreet(first, last) {
    if (last === undefined) {
        last = 'Doe';
    }
    return `Hi ${first} ${last}!`;
}