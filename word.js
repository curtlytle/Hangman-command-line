var Letter = require("./letter");

function Word(word) {
    this.word = word;
    this.letters = [];
    for (var i = 0; i < word.length; i++) {
        var letter = new Letter(word[i]);
        this.letters.push(letter);
    }
}
Word.prototype.checkGuess = function (guess) {
   for (var i = 0; i < this.letters.length; i++) {
       var letter = this.letters[i];
       if (letter.guessLetter(guess)) {
           return true;
       }
   }
   return false;
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