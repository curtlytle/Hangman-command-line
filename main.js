// dependency for inquirer npm package
var inquirer = require("inquirer");
var Word = require("./word");
var WordGenerator = require("./WordGenerator");

var generator = new WordGenerator();
var gameWord = new Word(generator.generateWord());
var endGame = false;

var chances = 4;
var badGuesses = 0;
var promptMsg = "Guess a letter!";

console.log("Welcome to Node Hangman!");
console.log("Words are case sensitive and you have " + chances + " chances");
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
                gameWord.displayWord();
                promptMsg = "Guess a letter!";
                promptForGuess();
            }
        } else {
            var checkedGuess = gameWord.checkGuess(letter);
            if (checkedGuess === -1) {
                console.log("You've already guessed that letter.");
                gameWord.displayWord();
                promptForGuess();
            } else if (checkedGuess === 0) {
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
