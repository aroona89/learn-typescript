#! /usr/bin/env node
import inquirer from "inquirer";
// let currentBalance: number = 10000; // $ Dollar
// let currentPin: number = 1234;
let credentials = await inquirer.prompt([
    {
        name: "pin",
        message: "Enter Pin Number:",
        type: "number"
    },
    {
        name: "balance",
        message: "Enter Amount:",
        type: "number"
    },
]);
// console.log(credentials); // return object { pin: 1234, balance: 1000 }
let currentPin = credentials.pin;
let currentBalance = credentials.balance;
if (credentials.pin === currentPin) {
    console.log("Login Successful!");
    let operationAnswer = await inquirer.prompt([
        {
            name: "operation",
            message: "Select Option:",
            type: "list",
            choices: ["Withdraw", "Check Balance"]
        },
    ]);
    if (operationAnswer.operation === "Withdraw") {
        let withdrawAnswer = await inquirer.prompt([
            {
                name: "operation",
                message: "Select Your Transaction Method:",
                type: "list",
                choices: ["Enter Amount", "Fast Cash"]
            },
        ]);
        if (withdrawAnswer.operation == "Enter Amount") {
            let amountAnswer = await inquirer.prompt([
                {
                    name: "amount",
                    message: "Enter Amount:",
                    type: "number",
                },
            ]);
            if (amountAnswer.amount <= currentBalance) {
                currentBalance -= amountAnswer.amount; // assigment operator
                console.log(`Operation Successful! Your Remaining Balance is ${currentBalance}$.`);
            }
            else {
                console.log("Insufficient Balance!");
            }
        }
        else {
            let selectAnswer = await inquirer.prompt([
                {
                    name: "cash",
                    message: "Select Amount:",
                    type: "list",
                    choices: [1500, 5000, 15000, 25000, 450000]
                },
            ]);
            if (selectAnswer.cash <= currentBalance) {
                currentBalance -= selectAnswer.cash; // assigment operator
                console.log(`Operation Successful! Your Remaining Balance is ${currentBalance}$.`);
            }
            else {
                console.log("Insufficient Balance!");
            }
        }
    }
    else {
        console.log(`Your Current Balance is ${currentBalance}$.`);
    }
}
else {
    console.log("Enter Correct Pin!");
}
