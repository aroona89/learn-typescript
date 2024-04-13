"use strict";
// var, let, const
// global scope, local scope(function scope), block scope
var num1 = 10;
// num1 = 15;
let num2 = 20;
// num2 = 25;
const num3 = 30;
// num3 = 35; //ERROR (cannot change)
function printConsole() {
    // global scope mai bnaye gaye variables (var, let, const) can be accessed in local scope
    var localVariable = num1 + num3 + num3; // 10 + 20 + 30
    let localVariable1 = num1 + num3 + num3; // 10 + 20 + 30
    const localVariable2 = num1 + num3 + num3; // 10 + 20 + 30
    // console.log("result:", localVariable, localVariable1, localVariable2);
    return localVariable; // parameters can be many to perform calculations but the concluded result to return will only be one.
}
var result = printConsole();
console.log(result);
// console.log("result:", localVariable, localVariable1, localVariable2);
// local variables (var, let, const) defined inside function scope cannot be accessed ouside the fucntion block
// local scope mai banye gaye variables cannot be accessed in global scope
{
    var ifVariable = 8;
    let ifVariable2 = 8;
    const ifVariable3 = 8;
}
// variable(var) defined inside block scope other than function block i.e. local scope can be accessed outside the block means in global scope
// variable(let, const) defined inside block scope other than function block i.e. local scope cannot be accessed outside the block means in global scope
console.log("block scope:", ifVariable);
// console.log("block scope:", ifVariable2, ifVariable3); //ERROR
/*  variables declared with var have function scope or global scope, but they do not have block scope.
This means that even if a variable is declared within a block (e.g., if statement, loop,
or any other block enclosed in curly braces {}), it is still accessible outside of that block.*/
// if (false) {
//     var x1 =10; //x is declared in global scope but its initialization remains in its original location.)
// }
// console.log(x1); // condition is false and x is not assigned a value or has not initialized with a value,
if (false) {
    var x2; //x is declared and assigned or initialized in global scope (hositing)
}
console.log(x2); // undefined value
// if (false) {
//     let x = 10; // condition is false so, this line of code will not be executed (not initalized)
// }
// console.log(x);
//The error message "Cannot find name 'x'" indicates that the variable x is not declared or defined at the point where it's being accessed.
// let cannot be accessed out of block scope
var z; // variable is declared in global scope but has not initialized or assigned with a value
console.log(typeof z); // by default undefiend value is assigned at the compilation time
/* Variables declared with var are subject to hoisting. This means they are conceptually moved
to the top of their block scope during compilation. However, their initialization value is
assigned only when the code execution reaches the declaration. */
// console.log(q); // (x is hoisted but not initialized yet) ERROR Variable 'q' is used before being assigned.
// var q=10;
// console.log(q); // Output: 10 (now x is initialized)
if (true) {
    let x; // Declared but not initialized
    console.log("behavior of let in block scope:", x); // undefined
}
// if (true) {
//     const x; // 'const' declarations must be initialized.
//     console.log("behavior of let in block scope:", x);
// }
// code throws an error
// var output: boolean = 4 == 2;
// console.log(output)
// code executes without an error
// var a: number = 4;
// var b: number = 2;
// var output: boolean = a==b;
// console.log(output)
// if (2<5) {
//     console.log("2 is less");
//     if (1<5) {
//         console.log("hello");
//     } else {
//         console.log("print");
//     }
// }
// else {
//     console.log("2 is less");
// }
// data type; number, string, boolean
// concatenation operator
// var n1: number = 10;
// var n2: number = 20;
// var str1: string = "20";
// var n3: number = 5;
// console.log(n1+n2+str1+n3); // left to right
// if string appeared after that everything will be considered as string
// class assigment solution
var units = 500;
var pricePerUnit = 10;
var price = units * pricePerUnit;
if (units > 0 && units <= 100) {
    let tax = (price * 5) / 100;
    let bill = tax + price;
    console.log(bill);
}
else if (units > 100 && units <= 200) {
    let tax = (price * 10) / 100;
    let bill = tax + price;
    console.log(bill);
}
else if (units > 200 && units <= 300) {
    let tax = (price * 20) / 100;
    let bill = tax + price;
    console.log(bill);
}
else if (units > 300 && units <= 400) {
    let tax = (price * 35) / 100;
    let bill = tax + price;
    console.log(bill);
}
else if (units > 400 && units <= 500) {
    let tax = (price * 50) / 100;
    let bill = tax + price;
    console.log(bill);
}
else if (units > 500) {
    let tax = (price * 100) / 100;
    let bill = tax + price;
    console.log(bill);
}
else {
    console.log("invalid");
}
