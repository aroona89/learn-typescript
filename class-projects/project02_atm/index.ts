import inquirer from "inquirer";

let currentBalance: number = 10000; // $ Dollar
let currentPin: number = 1234;

let answer = await inquirer.prompt([
  {
    name: "pin",
    message: "Enter Your Pin Number:",
    type: "number",
  },
]);

// console.log(answer); // return object { pin: 1234 }


if (answer.pin === currentPin) {
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
        message: "Select Option:",
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
        console.log(`Operation Successful! Your Remaining Balance is ${currentBalance}$.`)
        
      } else {
        console.log("Insufficient Balance!");
      }    
    } else {
      let selectAnswer = await inquirer.prompt([
        {
          name: "cash",
          message: "Select Amount:",
          type: "list",
          choices: [1000, 5000, 10000, 20000]
        },
      ]);
      if (selectAnswer.cash <= currentBalance) {
        currentBalance -= selectAnswer.cash; // assigment operator
        console.log(`Operation Successful! Your Remaining Balance is ${currentBalance}$.`)
        
      } else {
        console.log("Insufficient Balance!");
        
      }
      
    }
    
  } else {
    console.log(`Your Current Balance is ${currentBalance}$.`);
    
  }
  
} else {
  console.log("Enter Correct Pin!");
}

