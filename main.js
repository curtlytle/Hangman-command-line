// dependency for inquirer npm package
var inquirer = require("inquirer");
var Word = require("./word");

var gameWord = new Word("Baseball");

var chances = 3;
var badGuesses = 0;

function promptForGuess() {
    var letter = "";
    inquirer.prompt([
        {
            name: "letter",
            message: "Guess a letter!"
        }
    ]).then(function (answer) {
        // console.log(answer);
        letter = answer.letter;
        var goodGuess = gameWord.checkGuess(letter);
        if (!goodGuess) {
            console.log("Incorrect, " + (chances - badGuesses) + " chances left.");
            badGuesses++;
            if (badGuesses >= chances) {
                console.log("Game over, you lost.");
            } else {
                gameWord.displayWord();
                promptForGuess();
            }
        } else {
            gameWord.displayWord();
            promptForGuess();
        }
    });
}

promptForGuess();
