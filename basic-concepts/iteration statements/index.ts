// iteration statements or looping constructs

// // while loop
// var loopNum: number = 1; // variable initialization
// console.log("Table of 2");
// while (loopNum <= 10) {
//   // condition checking
//   let result: number = 2 * loopNum; // 2,4,6,8,10,12,14,16,18,20
//   console.log(`2*${loopNum}=${result}`);
//   ++loopNum; // pre-increment operator (increment, decrement)
// }
// console.log("END loop");

// for loop
// initialization, condtion checking, increment or decrement in one line using semicolon (seperator)

/* for (initialization; condition; increment/decrement) {
    // code block to be executed
} */

// for (let index = 10; index >= 1; --index) {
//   console.log(index);
// }

/* Note: firstly it will initailize the variable, secondly will check the condition, if true  loop body executes 
means run the code written in {} i.e execution of code block and then do increment or decrement (prefix, postfix) */

// let array = ["a", "b", "c", "d", "e"];

// // Using a for loop to access both values and their corresponding indexes
// for (let i = 0; i < array.length; i++) {
//   console.log(`Index: ${i}, Value: ${array[i]}`);
// }

// for of loop
// iterating through the values of an array without explicit index management

// let fruits = ["apple", "banana", "cherry"];
// for (const fruit of fruits) {
//   console.log(fruit);
// }

// for (const [index, fruit] of fruits.entries()) {
//   console.log(index, fruit);
// }

// // do while loop
// let num: number = 1;
// do {
//   console.log("do while loop", num);
//   ++num;
// } while (num <= 10);

// use-cases

// /* write a typescript program that calculates the sum of even numbers from 1 to 100
// and make the list of all even numbers to print along with the sum. */

// let sumEven = 0;
// let evenNumbersList: number[] = [];
// for (let index = 1; index <= 100; index++) {
//   if (index % 2 == 0) {
//     evenNumbersList.push(index);
//     sumEven = sumEven + index;
//   }
// }
// console.log("list of even numbers:", evenNumbersList);
// console.log("sum of even numbers:", sumEven);

// /* write a typescript program that calculates the sum of odd numbers from 1 to 100
// and make the list of all even numbers to print along with the sum. */

// let sumOdd = 0;
// let oddNumbersList: number[] = [];
// for (let index = 1; index <= 100; index++) {
//   if (index % 2 != 0) {
//     oddNumbersList.push(index);
//     sumOdd = sumOdd + index;
//   }
// }
// console.log("list of odd numbers:", oddNumbersList);
// console.log("sum of odd numbers:", sumOdd);

// loop methods designed specifically for working with arrays 
/*  The forEach loop, map loop, filter does not require you to explicitly define initialization, 
condition, and increment/decrement steps like a traditional for loop.  
*Initialize a loop counter variable (often starting at 0 for arrays).
*Define a condition that checks if the counter is within the valid range of the array (usually less than the array's length).
*Increment the counter variable after each iteration to move to the next element.  */

// for each loop
// let items: string[] = ["aroona", "amina", "umer", "bilal"];
// items.forEach(item => {
//     console.log(item);
// });

// using function keyword
// items.forEach(function (item, index, items) {
//   console.log("Element at index", index, "is", item, "of array", items);
// });

// // using arrow function
// items.forEach((item, index, items) => {
//   console.log("Element at index", index, "is", item, "of array", items);
// });

// map loop
// items.map((item, i, items) => {
//   console.log("Element at index", i, "is", item, "of array", items);
// });

// parameter name of a function could be anything index or i ...

// filter loop
// items.filter((item, index, items) => {
//     console.log("Element at index", index, "is", item, "of array", items);
//   });


/* write a typescript program that reshape the input array [2,5,10,20] by multiplying 2 with each
 entry and returns new array [4,10,20,40] that returns the element if the index is even number */

// let inputArray1: number[] = [2, 5, 10, 20];
// let outputArray1: number[] = [];

// for (let index = 0; index < inputArray1.length; index++) {
//     let value: number = inputArray1[index]*2;
//     outputArray1.push(value);
// }
// console.log("using for loop:", outputArray1);

// Iterates over each element of the array.
// Executes a provided function once for each array element.
// Does not return anything (undefined).

// let inputArray2: number[] = [2, 5, 10, 20];
// let outputArray2: number[] = [];
// inputArray2.forEach((element, index) => {
//     outputArray2.push(element*2); // cannot return
// });
// console.log("using for each loop:", outputArray2);

/* 1. Iterates over each element of the array.
2. Transforms each element using a provided function.
3. Returns a new array with the same length as the original array, where each element has 
been transformed according to the provided function. 
map Can access and modify the value, index, and the original array.
Useful for transforming data into a new format or structure. */

// let inputArray3: number[] = [2, 5, 10, 20];
// let result3 = inputArray3.map((element, index) => element*2); // can reshape and will return new array
// console.log("input array:", inputArray3);
// console.log("using map loop:", result3);


// let inputArray4: number[] = [2, 5, 10, 20];
// let result4 = inputArray4.filter((element, index) => element*2); // cannot reshape and will return the input array
// console.log("using filter loop:", result4);


// filter Iterates over each element of the array.
// Tests each element with a provided function.
// Returns a new array with only the elements that pass the test implemented by the provided function.

// let numbers = [1, 2, 3, 4];
// const evens = numbers.filter(number => {
//   return number % 2 === 0;
// });
// console.log("input array:", numbers); // ouput: [1, 2, 3, 4]
// console.log("new array:", evens); // Output: [2, 4]

/*  forEach is used for executing a function on each element without creating a new array, 
map is used for transforming each element and returning a new array, and filter is used for 
selecting elements based on a condition and returning a new array containing only those elements. */

// let sortNumbers = [4, 2, 5, 1, 3];
// console.log(sortNumbers.sort()); // Sorts in ascending order: [1, 2, 3, 4, 5]

// let reduceNumbers = [1, 2, 3, 4, 5];
// let sum = reduceNumbers.reduce((accumulator, currentValue) => accumulator + currentValue, 0); // currentIndex = 0
// console.log(sum);// Calculates the sum: 15 (accumulator starts at 0)

/* Reduces an array to a single value by applying a provided function (reducer) against an accumulator 
and each element in the array (from left to right).
The reducer function receives the accumulator, the current element, the current index, and the original 
array as arguments. */


let lenString: string = "aroona";
let lenList: string[] = ["aroona", "akbar", "ali"];
console.log(lenString.length); // it returns the number of characters in the string
console.log(lenList.length); //  it returns the number of elements in the array