// dependency for inquirer npm package
var inquirer = require("inquirer");

inquirer.prompt([
    {
        name: "letter",
        message: "Guess a letter!"
    }
]).then(function (answer) {
    console.log(answer);
});