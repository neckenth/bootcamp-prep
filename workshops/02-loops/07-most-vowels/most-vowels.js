// YOUR CODE BELOW

function mostVowels(words) {
    var maxVowels = 0;
    var maxWord = '';
    var wordList = words.split(' ');
    var vowels = ['a', 'e', 'i', 'o', 'u'];
    for (var i = 0; i < wordList.length; i++) {
        var vowelCounter = 0;
        for (var j = 0; j < wordList[i].length; j++) {
            if (vowels.indexOf(wordList[i][j]) > -1) {
                vowelCounter++;
            }
        }
        if (vowelCounter > maxVowels) {
            maxWord = wordList[i];
            maxVowels = vowelCounter;
        }
    }
    if (maxWord.slice(maxWord.length - 1) === '.') {
        return maxWord.slice(0, -1);
    }
    return maxWord;
}

mostVowels('Wit beyond measure is man\'s greatest treasure.')
