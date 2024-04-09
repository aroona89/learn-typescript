#! /usr/bin/env node
import inquirer from "inquirer";
import chalk from "chalk";
console.log(chalk.bold.yellowBright("Welcome to Simple Currency Converter App!\n"));
let condition = true;
const exchangeRate = {
    USD: 1, // Base currency
    EUR: 0.91,
    INR: 74.57,
    PKR: 280,
};
while (condition) {
    let select = await inquirer.prompt({
        name: "option",
        type: "list",
        message: "Do you want to convert currency?",
        choices: ["Yes", "No"],
    });
    switch (select.option) {
        case "Yes":
            let answer = await inquirer.prompt([
                {
                    name: "sourceCurrency",
                    message: "Enter source currency:",
                    type: "list",
                    choices: ["PKR", "USD", "INR", "EUR"],
                },
                {
                    name: "targetCurrency",
                    message: "Enter target currency:",
                    type: "list",
                    choices: ["EUR", "INR", "PKR", "USD"],
                },
                {
                    name: "inputAmount",
                    message: "Enter Amount:",
                    type: "number",
                },
            ]);
            let sourceCurrencyExchangeRate = exchangeRate[answer.sourceCurrency];
            let targetCurrencyExchangeRate = exchangeRate[answer.targetCurrency];
            let calculateConversion = (answer.inputAmount * targetCurrencyExchangeRate) /
                sourceCurrencyExchangeRate;
            console.log(chalk.green(`${answer.inputAmount}${answer.sourceCurrency} in ${answer.targetCurrency}: ${calculateConversion.toFixed(2)}`));
            break;
        default:
            console.log(chalk.yellowBright("Thank you for using Currency Converter App!"));
            condition = false;
            break;
    }
}
