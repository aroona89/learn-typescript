"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// if statement, Nested if statement & if else statement
// Q#1 Write a program that checks if a given number is positive, negative, or zero.
let givenNum = 0;
if (givenNum > 0) {
    console.log("Number is Positive.");
}
else if (givenNum < 0) {
    console.log("Number is Negative.");
}
else {
    console.log("Number is Zero.");
}
// Q#2 Write a program that checks if a given number is even or odd.
let evenOdd = 64;
if (evenOdd % 2 == 0) {
    console.log("Number is even.");
}
else {
    console.log("Number is odd.");
}
// Q#3 Write a program that determines if a person is eligible to vote based on their age.
let ageBaseVote = 18;
if (ageBaseVote >= 18) {
    console.log("You're eligible to caste a vote.");
}
else {
    console.log("You're not eligible to caste a vote.");
}
/* Q#4 Write a program to calculate the result of a mathematical expression.
((10+5)*3-2)/((4%3)-7) BODMAS RULE (LEFT TO RIGHT)*/
console.log("result of a mathematical expression", ((10 + 5) * 3 - 2) / ((4 % 3) - 7));
// (15*3-2)/(1-7)
// (45-2)/-6
// 43/-6
// Q#5 write a program to calculate the grade of students based on their marks.
let stuMarks = 1000;
if (stuMarks >= 0 && stuMarks <= 30) {
    console.log("Grade F");
}
else if (stuMarks > 30 && stuMarks <= 45) {
    console.log("Grade D");
}
else if (stuMarks > 45 && stuMarks <= 60) {
    console.log("Grade C");
}
else if (stuMarks > 60 && stuMarks <= 75) {
    console.log("Grade B");
}
else if (stuMarks > 75 && stuMarks <= 100) {
    console.log("Grade A");
}
else {
    console.log("Enter valid marks!");
}
/* Switch statement (approach for matching)
single expression with multiple possible values
perform different actions based on exact matches:*/
var section = 'D'; // section is key, get value from user
switch (section) {
    case 'A':
        console.log("Your class timing is from 9AM - 12PM.");
        break;
    case 'B':
        console.log("Your class timing is from 12PM - 3PM.");
        break;
    default:
        console.log("Your class timing is from 3AM - 6PM.");
        break;
}
/* class assigment solution
per unit price 10
Tax per 100 units 5% of total price
Tax per 200 units 10% of total price
Tax per 300 units 20% of total price
Tax per 400 units 35% of total price
Tax per 500 units 50% of total price
Tax on 500+ units 100% of total price */
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
