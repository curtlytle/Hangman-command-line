var Letter = require("./letter");

function Word(word) {
    this.word = word;
    this.letters = [];
    for (var i = 0; i < word.length; i++) {
        var letter = new Letter(word[i]);
        this.letters.push(letter);
    }

    this.checkGuess = function(guess) {
        var correctGuess = false;
        for (var i = 0; i < this.letters.length; i++) {
            var letter = this.letters[i];
            if (letter.guessed === false && letter.guessLetter(guess)) {
                correctGuess = true;
            }
        }

        return correctGuess;
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