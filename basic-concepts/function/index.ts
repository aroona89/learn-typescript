// write a program using function to add two numbers 
function sum(num1: number, num2: number) { // reusability, comma seperated parameter
    console.log("result=", num1 + num2); // function body, function defination
}
sum(20, 19) // call, argument

// write a program using function to add two numbers and add number 50 in result after performing calculations 
function sumNum(num1: number, num2: number): number { // reusability, comma seperated parameter, define datatype of return by :number 
    var output:number = num1 + num2;
    return output
}
var addOutput:number = sumNum(20, 19);
addOutput += 50;
console.log("result=", addOutput);

/* write a program using functions to convert the temperature
from celsius to fahrenheit */
function tempConvert(num: number) {
    var fahrenheit = num * (9 / 5) + 32;
    console.log(`Temperature in Fahrenheit will be ${fahrenheit}`);
}
tempConvert(32)

// write a prgram using function that calculates the percentage.
function calPercentage(obtained_marks: number, total_marks: number) {
    var percentage_marks = (obtained_marks / total_marks) * 100;
    console.log(`Marks in Percentage will be ${percentage_marks}%`)
}
calPercentage(67,100)

 // arrow function, anonymous function
//  var million = (num1: number, num2: number):number => {
//     return num1+num2
//  }
// curly brackets use ki jati hai lines of code ka block bnane ke liye, lqn ek line ka kya block bnana iz liye nahi lgate for single statement
var million = (num1: number, num2: number):number => num1+num2;
var sumMillion: number = million(2,5);
console.log(sumMillion += 3);


var sumArrow = (num1: number, num2: number): number => {
    var result: number = num1 + num2;
    return result

}
var updateSum: number = sumArrow(40,40);
console.log(typeof sumArrow);
console.log(`sum is: ${updateSum}`);





