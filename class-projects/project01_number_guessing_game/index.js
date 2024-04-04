#! /usr/bin/env node
import inquier from "inquirer";
// Generate random number from range 1 to 6
const randomNumber = Math.floor(Math.random() * 6 + 1);
const answers = await inquier.prompt([
    {
        name: "userInput",
        type: "number",
        message: "Guess a Number [1-6]:",
    },
]);
if (answers.userInput === randomNumber) {
    console.log("Congratulations! You guessesd a right number.");
}
else {
    console.log("TRY AGAIN!");
}
