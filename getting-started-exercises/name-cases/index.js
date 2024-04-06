"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/* Q#3
Name Cases: Store a person’s name in a variable, and then print that person’s name in lowercase, uppercase, and titlecase. */
let first_name = "Aroona aLI";
console.log(first_name.toLowerCase()); // print that person’s name in lowercase
console.log(first_name.toUpperCase()); // print that person’s name in uppercase
console.log(titlecase(first_name)); // print that person’s name in titlecase
// Title case refers to the capitalization of the first letter of each word in a sentence or string.
function titlecase(str) {
    return str.split(' ').map(word => word[0].toUpperCase() + word.slice(1).toLowerCase()).join(' ');
}
/* Explanation:
- split(' '): Splits the string into an array of words, using space as the delimiter or seperator.
- map(word => ...): Iterates over each word in the array and applies the arrow function, creating a new array with the transformed elements.
- word[0].toUpperCase() + word.slice(1):
  -- word[0]: Accesses the first character of the current word.
  -- toUpperCase(): Converts the first character to uppercase.
  -- word.slice(1): Extracts the remaining substring (all characters except the first) using slice.
  -- Concatenates the uppercase first character with the remaining substring.
- join(' '): Joins the modified words back into a string, using space as the separator. */
// Note: If you omit the end parameter in .slice(start), the end index is implicitly set to the length of the array or string.
