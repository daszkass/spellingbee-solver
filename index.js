const fs = require("fs");
const arguments = process.argv.slice(2);
const wordsBuffer = fs.readFileSync(__dirname + "/dictionary");
const wordsString = wordsBuffer.toString();
const wordsArray = wordsString.split('\n');

const centerLetter = arguments[0];

function isLongEnough(word){
    return word.length > 3;
};
const allLongEnough = wordsArray.filter(isLongEnough);

function hasCenterLetter(word){
    return word.toLowerCase().includes(centerLetter);
};
const withCenterLetter = allLongEnough.filter(hasCenterLetter);

const alphabet = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
const otherLetters = arguments[1].split("");
const diff = alphabet.filter(letter => !otherLetters.includes(letter));
const forbiddenLetters = diff.filter(letter => letter !== centerLetter);

let allowedWords = withCenterLetter;
for (const letter of forbiddenLetters) {
    function hasNoForbidden(word) {
        return !word.toLowerCase().includes(letter);
    }
    allowedWords = allowedWords.filter(hasNoForbidden);
}

console.log(allowedWords);
