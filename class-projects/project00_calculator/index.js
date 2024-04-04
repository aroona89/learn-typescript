#! /usr/bin/env node
import inquirer from "inquirer";
const answer = await inquirer.prompt([
    { message: "Enter First Number", type: "number", name: "firstNumber" },
    { message: "Enter Second Number", type: "number", name: "secondNumber" },
    {
        message: "Select one of the operators to perform action",
        type: "list",
        name: "operator",
        choices: ["Addition", "Subtraction", "Multiplication", "Division"],
    },
]);
// conditional statement
if (answer.operator === "Addition") {
    const result = answer.firstNumber + answer.secondNumber;
    console.log(`Your answer is: ${result}`);
}
else if (answer.operator === "Subtraction") {
    const result = answer.firstNumber - answer.secondNumber;
    console.log(`Your answer is: ${result}`);
}
else if (answer.operator === "Multiplication") {
    const result = answer.firstNumber * answer.secondNumber;
    console.log(`Your answer is: ${result}`);
}
else {
    const result = answer.firstNumber / answer.secondNumber;
    console.log(`Your answer is: ${result}`);
}
