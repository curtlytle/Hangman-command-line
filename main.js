// dependency for inquirer npm package
var inquirer = require("inquirer");
var Word = require("./word");

var gameWord = new Word("Baseball");

inquirer.prompt([
    {
        name: "letter",
        message: "Guess a letter!"
    }
]).then(function (answer) {
    console.log(answer);
    gameWord.checkGuess(answer.letter);
    gameWord.displayWord();
});