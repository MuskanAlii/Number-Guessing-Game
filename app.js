#! /usr/bin/env node
import inquirer from "inquirer";
import chalk from "chalk";
console.log(chalk.hex("#FB5607").bold("Welcome to Number Guessing Game! "));
const randomNumber = Math.floor(Math.random() * 6 + 1);
const result = await inquirer.prompt([
    {
        name: "GuessedNumber",
        type: "number",
        message: chalk.hex("#FF8FAB")("Please! Guess the Number Between 1-6: "),
    },
]);
if (result.GuessedNumber === randomNumber) {
    console.log(chalk.hex("#57CC99")("Congratulations! You Guessed The Right Number (YOU WIN)"));
}
else {
    console.log(chalk.hex("#BF0603")("You Guessed Wrong Number (TRY AGAIN) "));
}
