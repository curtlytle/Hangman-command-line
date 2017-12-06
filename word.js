var Letter = require("./letter");
var guesses = [];

function Word(word) {
    this.word = word;
    this.letters = [];
    for (var i = 0; i < word.length; i++) {
        var letter = new Letter(word[i]);
        this.letters.push(letter);
    }

    this.checkGuess = function(guess) {
        var ind = guesses.indexOf(guess);
        if (ind >= 0) {
            return -1;  // already guessed
        } else {
            guesses.push(guess);
        }
        var correctGuess = false;
        for (var i = 0; i < this.letters.length; i++) {
            var letter = this.letters[i];
            if (letter.guessLetter(guess)) {
                correctGuess = true;
            }
        }

        if (correctGuess) {
            return 1;
        } else {
            return 0;
        }
    }
}
Word.prototype.isWordGuessed = function() {
    for (var i = 0; i < this.letters.length; i++) {
        var letter = this.letters[i];
        if (!letter.guessed) {
            return false;
        }
    }
    return true;
};

Word.prototype.displayWord = function () {
    var display = "";
    for (var i = 0; i < this.letters.length; i++) {
        var letter = this.letters[i];
        display += letter.getLetter();
    }
    console.log(display);
};

module.exports = Word;