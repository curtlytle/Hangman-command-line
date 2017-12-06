// dependency for inquirer npm package
var inquirer = require("inquirer");
var Word = require("./word");

var gameWord = new Word("Baseball");
var endGame = false;

var chances = 3;
var badGuesses = 0;
var promptMsg = "Guess a letter!";

function promptForGuess() {
    var letter = "";
    inquirer.prompt([
        {
            name: "letter",
            message: promptMsg
        }
    ]).then(function (answer) {
        // console.log(answer);
        letter = answer.letter;
        if (endGame) {
            endGame = false;
            if (letter.toUpperCase() === "Y") {
                promptMsg = "Guess a letter!";
                promptForGuess();
            }
        } else {
            var goodGuess = gameWord.checkGuess(letter);
            if (!goodGuess) {
                console.log("Incorrect, " + (chances - badGuesses - 1) + " chances left.");
                badGuesses++;

                if (badGuesses >= chances) {
                    console.log("Game over, you lost.");
                    promptMsg = "Do you want to keep going? (Y or N)";
                    endGame = true;
                    promptForGuess();
                } else {
                    gameWord.displayWord();
                    promptForGuess();
                }
            } else if (gameWord.isWordGuessed()) {
                console.log("You WIN!  Word guessed was: " + gameWord.word);
            } else {
                gameWord.displayWord();
                promptForGuess();
            }
        }
    });
}

promptForGuess();
