function Letter (letter) {
    this.letter = letter;
    this.guessed = false;
}
Letter.prototype.getLetter = function () {
    if (this.guessed) {
        return this.letter;
    } else {
        return " _ ";
    }
};
Letter.prototype.guessLetter = function (letterGuess) {
    if (this.letter === letterGuess) {
        this.guessed = true;
    }
    return this.guessed;
};

module.exports = Letter;