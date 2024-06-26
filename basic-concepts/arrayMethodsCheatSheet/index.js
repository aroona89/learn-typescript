"use strict";
// Array Methods Cheat Sheet
Object.defineProperty(exports, "__esModule", { value: true });
// instance methods
console.log("length:", [1, 2, 3].length); // Returns the number of elements in the array
// "aroona".length // Returns the number of elements in the string
console.log("push:", [1, 2, 3].push(4)); // Appends new elements to the end of an array, and returns the new length of the array.
console.log("unshift:", [1, 2, 3].unshift(0)); // Inserts new elements at the start of an array, and returns the new length of the array.
console.log("pop:", [1, 2, 3].pop()); // Removes the last element from an array and returns it.
console.log("shift:", [1, 2, 3].shift()); // Removes the first element from an array and returns it.
console.log("access index:", [1, 2, 3][1]); // Accessing Elements; access the element at index 1
// Note: the built-in at method is not yet a standard feature in TypeScript. While some browsers have implemented it,
console.log("at:", [1, 2, 3].at(2)); // Returns the item located at the specified index.
console.log("indexOf:", [1, 2, 3, 6, 3].indexOf(3)); // Returns the index of the first occurrence of a value in an array, or -1 if it is not present.
console.log("includes:", [1, 2, 3].includes(3)); // Determines whether an array includes a certain element, returning true or false as appropriate.
console.log("map:", [1, 2, 3].map(num => Math.pow(num, 2))); // Calls a defined callback function on each element of an array, and returns an array that contains the results.
console.log("filter:", [1, 2, 3].filter(num => num % 2 === 0)); // Returns the elements of an array that meet the condition specified in a callback function.
console.log("every:", [1, 2, 3].every(num => num > 1)); // Determines whether all the members of an array satisfy the specified test.
console.log("some:", [1, 2, 3].some(num => num === 3)); // Determines whether the specified callback function returns true for any element of an array.
console.log("fill:", [1, 2, 3].fill(10, 1, 3)); // Fills array elements with a static value.
console.log("reduce:", [1, 2, 3].reduce((acc, num) => acc + num, 0)); // Reduces the array to a single value (callbackfn, initialValue)
console.log("concat:", [1, 2, 3].concat([4, 5])); // Combines arrays into a new one
console.log("reverse:", [1, 2, 3].reverse()); // Reverses the order of elements
console.log("sort:", [2, 1, 3].sort()); // Sorts an array
console.log("join:", [1, 2, 3].join(',')); // Adds all the elements of an array into a string, separated by the specified separator.
console.log("flat:", [1, [2, 3], [4, [5, 6]]].flat(2)); // depth parameter controls how many levels of nesting to flatten.
console.log("find:", [1, 2, 3, 1].find((value, index) => value === 1 && index === 3)); // Returns the first element that satisfies a condition.
console.log("findIndex:", [1, 2, 3].findIndex(num => num === 2)); // Returns the index of the first matching element
console.log("toString:", [1, 2, 3].toString()); // Returns a string representation of an array; Converts the array to a string.
console.log("slice:", [1, 2, 3].slice(1, 3)); // Extracts a portion of the array
console.log("splice:", [4, 7, 9, 2].splice(0, 1, 8)); // Adds or removes elements from the array.
//----------
// static methods 
console.log("isArray:", Array.isArray("[1, 2, 3]")); // static method of the Array object.
// Checks if an object is an array; The isArray method is a static method, meaning it can be called directly on the Array object itself, without needing an instance of an array.
// from method iterates over each character in the string "123" and creates a new array with those individual characters as separate elements.
console.log("from:", Array.from("123")); // static method of the Array object; Creates an array from an iterable object.
console.log("of:", Array.of(2, 4, 7));
//----------
