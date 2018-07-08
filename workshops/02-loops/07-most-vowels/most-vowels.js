// YOUR CODE BELOW
function mostVowels(str) {
    let max = 0;
    let maxWord = '';
    let words = str.split(' ');
    let vowels = 'aeiou'.split('');
    for (let i = 0; i < words.length; i++) {
        let vowelCounter = 0;
        for (let j = 0; j < words[i].length; j++) {
            if (vowels.indexOf(words[i][j]) > -1) {
                vowelCounter++;
            }
        }
        if (vowelCounter > max) {
            max = vowelCounter;
            maxWord = words[i];
        }
    }
    maxWord = maxWord.replace(/[^A-Za-z0-9\s]/g,"");
    return maxWord;

}