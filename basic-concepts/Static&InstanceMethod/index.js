"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// Array Constructor:
// the Array constructor is a built-in function that creates new array instances.
// Object Creation: You don't use new with Array() constructor. Arrays are created directly using [] or Array().
// Unlike classes where you use new to create objects, the Array() constructor itself can be called directly to create arrays.
console.log(Array(2, 5, 7).indexOf(7));
console.log([3, 6, 7].includes(7));
// instances of an array
// Array(2, 5, 7)
// [3,6,7]
//----------
// Static Methods:
// Static methods are called directly on the Array constructor itself, not on an instance of an array.
// Examples of static methods include Array.from(), Array.isArray(), and Array.of().
console.log(typeof [2, 5, 6]);
console.log(Array.isArray([1, 2, 3])); // checks if an object is an array
//----------
// instance methods
// Methods like push(), pop(), or map() are called on array instances to manipulate their content.
console.log([6, 8, 3].push(4));
// from method iterates over each character in the string "123" and creates a new array with those individual characters as separate elements.
console.log(Array.from("123")); // from() static method belongs to the constructor function (Array) ; Creates an array from an iterable object.
console.log(Array.of(2, 4, 7));
// Note: run tsc && node index.js command
