"use strict";
/* Q#1
Calculate your age based on the current year and your birth year. */
Object.defineProperty(exports, "__esModule", { value: true });
let currentYear = 2024;
let birthYear = 2001;
let age = currentYear - birthYear;
console.log(`My current Age is ${age}.`);
/* Q#2
Write a program that calculates the area of a rectangle using length and width variables. */
let length = 12;
let width = 32;
let areaRectangle = length * width;
console.log(`Area of a rectangle is ${areaRectangle} meter square.`);
/* Q#3
Write a program that calculates the area of a circle. */
let pie = 3.14;
let radius = 32;
let areaCircle = pie * radius ** 2; // BODMAS RULE /,* and +,- are of equal precedence
console.log(`Area of a circle is ${areaCircle} meter square.`);
/* Q#4
Write a program that calculates the area of the cube. */
let sides = 12;
let areaCube = 6 * sides ** 2; // BODMAS RULE /,* and +,- are of equal precedence
console.log(`Area of a cube is ${areaCube} meter square.`);
/* Q#5
Create a program that converts a temperature from Fahrenheit to Celsius and vice versa using a variable. */
// Q#5(i) Fahrenheit to Celsius 
let fahrenheitTemperature = 32;
let fahrenheitToCelsius = 5 / 9 * (fahrenheitTemperature - 32);
// BODMAS RULE /,* and +,- are of equal precedence (start solving from left to right)
console.log(`${fahrenheitTemperature} Fahrenheit in Celsius: ${fahrenheitToCelsius}`);
// Q#5(ii) Celsius to Fahrenheit
let celsiusTemperature = 32;
let celsiusToFahrenheit = (9 / 5 * fahrenheitTemperature) + 32;
// BODMAS is an acronym for Brackets, Orders or Exponents, Division, Multiplication, Addition, Subtraction.
console.log(`${celsiusTemperature} Fahrenheit in Celsius: ${celsiusToFahrenheit}`);
/* Q#6
Convert a given number of seconds into minutes and seconds using variables. */
// Q#6(i) Seconds into Minutes
let seconds = 60;
let secondsIntoMinutes = seconds / 60;
console.log(`${seconds} second is equal to ${secondsIntoMinutes} minute.`);
// Q#6(ii) Minutes into Seconds
let minutes = 1;
let MinuteIntoseconds = minutes * 60;
console.log(`${minutes} minute is equal to ${MinuteIntoseconds} second .`);
/* Q#7
Write a program that calculates the percentage. */
let obtainedMarks = 89;
let totalMarks = 100;
let percentage = obtainedMarks / totalMarks * 100; // BODMAS Rule (left to right)
console.log(`Your Percenatge is ${percentage}%`);
// Increment and Decrement Operator:
// Q#1
let a = 2; // 3 pre-increment
let b = ++a * 2; // 3 * 2 
console.log("b:", b); // 6
console.log("a:", a); // 3
// Q#2
let x = 5; // 4 post-decrement
let y = x-- + 2; // 5 + 2
console.log("y:", y); // 7
console.log("x", x); // 4
// Q#3
let q = 3; // 4 (pre-increment), 5 (post-increment), 6 (pre-increment)
let z = ++q + q++ + ++q; // 4 + 4 + 6 
console.log("z", z); // 14
console.log("q:", q); // 6
// Q#4
let m = 2; // 3 (pre-increment), 4 (post-increment), 3 (pre-decrement)
let n = ++m * m++ * --m; // 3 * 3 * 3
console.log("n", n); // 27
console.log("m", m); // 3
// Q#5
let f = 3; // 4 (pre-increment), 5 (post-increment)
let g = 5; // 4 (post-decrement), 3 (pre-decrement)
let result = ++f + g-- - f++ + --g; // 4 + 5 - 4 + 3 => 9 - 4 + 3 => 5 + 3
console.log("result:", result); // 8
console.log("f:", f); // 5
console.log("g:", g); // 3
// Q#6
let k = 2; // 3 (post-increment), 2 (pre-decrement) 
let l = 4; // 5 (pre-increment), 4 (post-decrement)
let output = k++ + ++l - --k + l--; // 2 + 5 - 2 + 5 => 7 - 2 + 5 => 5 + 5
console.log("result:", output); // 10
console.log("k:", k); // 2
console.log("l:", l); // 4
// Q#7
let c = 5; // 6 (pre-increment)
let d = 3; // 2 (post-decrement)
let r = 2;
let t = 7; // 6 (pre-decrement)
let find = ++c * (d-- + r) / --t; // 6 * (3 + 2) / 6 => 6 * 5 / 6 => 30 / 6
console.log("result:", find); // 5
console.log("c:", c); // 6
console.log("d:", d); // 2
console.log("r:", r); // 2
console.log("t:", t); // 6
// Q#8
let v = 2; // 3 (post-increment)
let j = 3; // 2 (pre-decrement)
let o = 4; // 3 (post-decrement)
let solve = v++ * (--j + v) / (o-- - j); // 2 *(2 + 3) / (4 - 2) => 2*5/2 => 10/2
console.log("result:", solve); // 5
console.log("v:", v); // 3
console.log("j:", j); // 2
console.log("o:", o); // 3
