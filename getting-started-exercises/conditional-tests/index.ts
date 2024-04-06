/* Q#23
Conditional Tests: Write a series of conditional tests. Print a statement describing 
each test and your prediction for the results of each test. Your code should look something like this:
let car = 'subaru';
console.log("Is car == 'subaru'? I predict True.")
console.log(car == 'subaru')
• Look closely at your results, and make sure you understand why each line evaluates to True or False.
• Create at least 10 tests. Have at least 5 tests evaluate to True and another 5 tests evaluate to False. */

// Test 1 
let  stuName = 'AROONA ALI';
console.log("Is stuName == 'AROONA ALI'? I predict True.");
console.log(stuName == 'AROONA ALI');

// Test 2
let win = 1;
let fail = 0;
console.log("Is win >= fail? I predict True.");
console.log(win >= fail);

// Test 3
let sad = 0;
let happy = 100;
console.log("Is sad != happy? I predict True.");
console.log(sad != happy); 

// Test 4
let data1 = 67;
let data2 = 78;
console.log("Is data1 <= data2? I predict True.");
console.log(data1 <= data2); 

// Test 5
let education = true;
let grade = false;
console.log("Is education || grade? I predict True."); // logical OR operator
console.log(education || grade); 

// Test 6
let chinaPopulation = 1393;
let pakistanPopulation = 212.2;
console.log("Is pakistanPopulation < chinaPopulation? I predict True.");
console.log(pakistanPopulation < chinaPopulation); 

// Test 7
let num1 = 2;
let num2 = 4;
console.log("Is num1 == num2? I predict False.");
console.log(num1 == num2);

// Test 8
let abc = 'ABC'; // string literal
let num = 123; // numeric literal
console.log("Is abc == num? I predict False.");
console.log(num1 === num2);

// Test 9
let greater = 89;
let smaller = 9;
console.log("Is smaller > greater? I predict False.");
console.log(smaller > greater);

// Test 10
let mind = '100';
let heart = '100';
console.log("Is mind == heart? I predict False.");
console.log(mind != heart);

// Test 11
let rain = false;
let sun = true;
console.log("Is rain && sun? I predict False.");
console.log(rain && sun);


/* Q#24
More Conditional Tests: You don’t have to limit the number of tests you create to 10. 
If you want to try more comparisons, write more tests. 
Have at least one True and one False result for each of the following:
• Tests for equality and inequality with strings

• Tests using the lower case function

• Numerical tests involving equality and inequality, greater than and less than, 
greater than or equal to, and less than or equal to

• Tests using "and" and "or" operators

• Test whether an item is in a array

• Test whether an item is not in a array */

// Test for equality with strings
let eqString1: string = "HELLO";
let eqString2: string = "hello";
console.log("Is eqString1 == eqString2? I predict False.");
console.log(eqString1 == eqString2);

let inStr1: string = 'good';
let inStr2: string = 'good';
console.log("Is inStr1 == inStr2? I predict True.");
console.log(inStr1 == inStr2);

// Test for inequality with strings
let eqStr1: string = 'pass';
let eqStr2: string = 'fail';
console.log("Is eqStr1 != eqStr2? I predict True.");
console.log(eqStr1 != eqStr2);

let inequalNum: string = '23';
console.log("Is inequalNum != '50'? I predict True.");
console.log(inequalNum != '50');

// Tests using the lower case function

let lowerString1: string = "HELLO";
let lowerString2: string = "hello";
console.log("Is eqString1 == eqString2? I predict True.");
console.log(eqString1.toLowerCase() == eqString2.toLowerCase());

let lowerCaseString: string = "TypeScript";
console.log(`Is lowerCaseString.toLowerCase() == "TypeScript"? I predict False.`);
console.log(lowerCaseString.toLowerCase() == "TypeScript");

// Numerical tests involving equality

let numericalEquality: number = 100;
console.log(`Is numericalEquality === 100? I predict True.`);
console.log(numericalEquality === 100);

let falseEquality1: number = 45;
let falseEquality2: number = 46;

console.log(`Is falseEquality1 === falseEquality2? I predict False.`);
console.log(falseEquality1 === falseEquality2);


// Numerical tests involving inequality

let trueInequality: number = 23;
console.log(`Is trueInequality != 25? I predict True.`);
console.log(trueInequality != 25);

console.log(`Is 25 != 25? I predict False.`);
console.log(25 != 25);

let userObject; // Not initialized
console.log("Is userObject defined? I predict False.");
console.log(typeof userObject !== 'undefined');

// Numerical tests involving greater than

let temperature = 38;
console.log("Is temperature > 30? I predict True.");
console.log(temperature > 30); // True (temperature is greater than 30)

console.log("25 > 100? I predict False.");
console.log(25 > 100); // False (25 is less than 100)

// Numerical tests involving less than

console.log("25 < 89? I predict True.");
console.log(25 < 89); // true (25 is less than 100)

console.log("1 < 0? I predict False.");
console.log(1<0); // fasle (1 is greater than 0)

// Numerical tests involving greater than or equal to 

console.log("30 >= 20? I predict True.");
console.log(30 >= 20); // True (30>20 || 30==20)

console.log("25 >= 100? I predict False.");
console.log(25 >= 100); // False (25>100 || 25==100)

// Numerical tests involving less than or equal to
let points = 75;
console.log("Are points <= 80? I predict True.");
console.log(points <= 80); // True (75<80 || 75 == 80) 

console.log("2 <= 0? I predict False.");
console.log(2 <= 0); // False (2<0 || 2==0)

// Tests using "and" and "or" operators

console.log("true && false? I predict False.");
console.log(true && false); // False (a*b => 1*0 => 0 hence answer false)

console.log("0<1 && 2<3? I predict true.");
console.log(0<1 && 2<3); // true (true && true => 1 * 1 => 1 hence answer is true)

console.log("true || false? I predict true.");
console.log(true || false); // true (a+b => 1+0 => 1 hence answer true)

console.log("1<0 || 2>3? I predict false.");
console.log(1<0 || 2>3); // false (false || false => 0 + 0 => 0 hence answer is false)


let room: Array<string> = ["table", "chair", "bulb", "fan"]
console.log(room);

// Test whether an item is in a array
console.log(`room[1] == "chair"? I predict true.`);
console.log(room[1] == "chair");

console.log(`room[0] == "bed"? I predict false.`);
console.log(room[0] == "bed");

// Test whether an item is not in a array 
console.log(`room[1] != "chair"? I predict false.`);
console.log(room[1] != "chair");

console.log(`room[0] != "bed"? I predict true.`);
console.log(room[0] != "bed");