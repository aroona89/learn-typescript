"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// write a program using function to add two numbers
function sum(num1, num2) {
    // reusability, comma seperated parameter
    console.log("result=", num1 + num2); // function body, function defination
}
sum(20, 19); // call, argument
// write a program using function to add two numbers and add number 50 in result after performing calculations
function sumNum(num1, num2) {
    // reusability, comma seperated parameter, define datatype of return by :number
    var output = num1 + num2;
    return output;
}
var addOutput = sumNum(20, 19);
addOutput += 50;
console.log("result=", addOutput);
/* write a program using functions to convert the temperature
from celsius to fahrenheit */
function tempConvert(num) {
    var fahrenheit = num * (9 / 5) + 32;
    console.log(`Temperature in Fahrenheit will be ${fahrenheit}`);
}
tempConvert(32);
// write a prgram using function that calculates the percentage.
function calPercentageWithParameters(obtained_marks, total_marks) {
    var percentage_marks = (obtained_marks / total_marks) * 100;
    console.log(`Marks in Percentage will be ${percentage_marks}%`);
}
calPercentageWithParameters(67, 100);
// arrow function, anonymous function
//  var million = (num1: number, num2: number):number => {
//     return num1+num2
//  }
// curly brackets use ki jati hai lines of code ka block bnane ke liye, lqn ek line ka kya block bnana iz liye nahi lgate for single statement
var million = (num1, num2) => num1 + num2;
var sumMillion = million(2, 5);
console.log((sumMillion += 3));
var sumArrow = (num1, num2) => {
    var result = num1 + num2;
    return result;
};
var updateSum = sumArrow(40, 40);
console.log(typeof sumArrow);
console.log(`sum is: ${updateSum}`);
// function synatx with return data type
function testing() {
    return "hello world!";
}
console.log(testing());
// data type of a function which don't return anything
function dontreturn() {
    console.log("hello world!");
}
dontreturn();
// Arrow Function
const arrFunc = () => {
    console.log("Arrow Function!");
};
arrFunc();
// Arrow Function with parameters
const arrFuncWithParameters = (name) => {
    console.log("name:", name);
};
arrFuncWithParameters("aroona");
// Arrow Function with rtuen type
const arrFuncWithReturnType = () => {
    return "arrow function with return type!";
};
console.log(arrFuncWithReturnType());
// Lambda functions i.e one-liner functions
const lambdaFunc = (name) => `Hello ${name}`;
console.log(lambdaFunc("aroona"));
const sumFunc = (num1, num2) => num1 + num2;
console.log(sumFunc(3, 5));
// ---------------------------------
// Functions as first-class citizens & Callback functions
const addTwoValues = (num1, num2) => {
    return num1 + num2;
};
// func: (num1: number, num2: number) => number,
// func is the name of the parameter.
// (num: number, num5: number) defines the parameters of the func function, which are num1 and num2, both of type number.
// => number indicates that the func function returns a value of type number.
// withMultiply: number
// withMultiply is the name of the parameter.
// number is the type of the parameter.
const functionAsParam = (func, withMultiply) => {
    return func(20, 30) * withMultiply; // func (which is actually addTwoValues) is executed by functionAsParam, making it a callback function.
};
const ans = functionAsParam(addTwoValues, 10); // addTwoValues is passed as an argument to functionAsParam, demonstrating that functions can be treated as values.
console.log("🚀 product:", ans);
// ---------------------------------
const returnAValue = (val) => {
    return val;
};
const concatString = (returnAValue, // first parameter
concat // second paarameter
) => {
    let returnedValue = returnAValue("Testing"); // Callback function
    console.log("🚀 concatinaion:", returnedValue + concat);
};
concatString(returnAValue, " my program"); // Functions as first-class citizens
// ---------------------------------
