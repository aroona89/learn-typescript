"use strict";
// Array Methods Cheat Sheet
Object.defineProperty(exports, "__esModule", { value: true });
[1, 2, 3].length; // Returns the number of elements in the array
// "aroona".length // Returns the number of elements in the string
[1, 2, 3].push(4); // Appends new elements to the end of an array, and returns the new length of the array.
[1, 2, 3].unshift(0); // Inserts new elements at the start of an array, and returns the new length of the array.
[1, 2, 3].pop(); // Removes the last element from an array and returns it.
[1, 2, 3].shift(); // Removes the first element from an array and returns it.
[1, 2, 3][1]; // Accessing Elements; access the element at index 1
// Note: the built-in at method is not yet a standard feature in TypeScript. While some browsers have implemented it,
[1, 2, 3].at(2); // Returns the item located at the specified index.
console.log([1, 2, 3, 6, 3].indexOf(3)); // Returns the index of the first occurrence of a value in an array, or -1 if it is not present.
[1, 2, 3].includes(3); // Determines whether an array includes a certain element, returning true or false as appropriate.
[1, 2, 3].map(num => Math.pow(num, 2)); // Calls a defined callback function on each element of an array, and returns an array that contains the results.
[1, 2, 3].filter(num => num % 2); // Returns the elements of an array that meet the condition specified in a callback function.
[1, 2, 3].every(num => num > 1); // Determines whether all the members of an array satisfy the specified test.
[1, 2, 3].some(num => num === 3); // Determines whether the specified callback function returns true for any element of an array.
[1, 2, 3].fill(10, 1, 2); // Fills array elements with a static value.
[1, 2, 3].reduce((acc, num) => acc + num, 0); // Reduces the array to a single value (callbackfn, initialValue)
[1, 2, 3].concat([4, 5]); // Combines arrays into a new one
[1, 2, 3].reverse(); // Reverses the order of elements
[2, 1, 3].sort(); //? [1, 2, 3]
[1, 2, 3].join(' '); // Adds all the elements of an array into a string, separated by the specified separator.
[1, 2, [3]].flat(); //? [1, 2, 3]
[1, 2, 3].find((num, i) => i === 1); //? 2
[1, 2, 3].findIndex(num => num === 2); //? 1
[1, 2, 3].toString(); //? '1,2,3'
[1, 2, 3].slice(1, 3); //? [2, 3]
[1, 4].splice(1, 0, 2, 3); //? [] (the array becomes [1, 2, 3, 4])
Array.isArray("[1, 2, 3]"); //? false
Array.from("123"); //? ['1', '2', '3']
