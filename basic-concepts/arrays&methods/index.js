"use strict";
// var stuRollNo: number[] = [1,2,3,4,5] // index 0,1,2,3,4
// console.log(stuRollNo[3]);
Object.defineProperty(exports, "__esModule", { value: true });
// var stuName: string[] = ["aroona","bilal", "amina", "umer"] // index 0,1,2,3
// console.log(stuName[2]);
// // how to check whether an element is present in an array or not?
// if (stuName.includes("amina")) {
//     console.log("Last Child!")
// }
// /* arrays are mutable. 
// This means you can modify the elements present in an array after it's created. 
// You can change existing elements, add new elements, or remove elements from the array. */
// stuRollNo[4] = 0;
// console.log(stuRollNo[4]);
// // built-in array functions 
// let builtFunc: string[] = ["one", "two", "three", "four"]
// builtFunc.push("five")  // Appends new elements to the end of an array, and returns the new length of the array.
// console.log(builtFunc);
// builtFunc.pop() //Removes the last element from an array and returns it. 
// console.log(builtFunc);
// builtFunc.shift() // Removes the first element from an array and returns it. 
// console.log(builtFunc);
// builtFunc.unshift("zero") // Inserts new elements at the start of an array, and returns the new length of the array.
// console.log(builtFunc);
// builtFunc.splice(1,0,"one") // Removes elements from an array and, if necessary, inserts new elements in their place, 
// console.log(builtFunc);
// builtFunc.splice(5,0,"five") // splice acting as push
// console.log(builtFunc);
// builtFunc.splice(5,1) // splice acting as pop
// console.log(builtFunc);
// builtFunc.splice(0,1) // splice acting as shift
// console.log(builtFunc);
// builtFunc.splice(0,0,"undefined") // splice acting as unshift
// console.log(builtFunc);
// let newArray:number [] = [1,2]
// newArray.push(3,4,5,6)
// console.log("many values added at once:", newArray)
// Array
let names = ["Abu Hurairah", "Naveed", "Usman", "Ali", "Hassan"];
console.log("Before adding", names);
names.push("Rauf");
console.log("After adding rauf", names);
let addName = "Akbar";
let adding = names.push(addName, "Adnan", "Abdul Rehman"); // Appends new elements to the end of an array, and returns the new length of the array.
console.log("🚀 ~ adding:", adding);
console.log("after adding", names);
let removing = names.pop(); // Removes the last element from an array and returns it. 
console.log("🚀 ~ removing:", removing);
console.log("After Removing", names);
let returned = names.unshift("Shafique", "Waseem", "Bilal", "Haider"); // Inserts new elements at the start of an array, and returns the new length of the array.
console.log("🚀 ~ returned:", returned);
console.log("After adding at start", names);
let removed = names.shift();
console.log("🚀 ~ removed:", removed); // Removes the first element from an array and returns it. 
console.log("After Removing at start", names);
// Modify or manipulate arrays by pop, push, shift, unshift methods
let numbers = [1, 2, 3, 4, 5, 6, 7];
numbers.pop(); // remove 7 [1, 2, 3, 4, 5, 6]
numbers.push(7); // add 7 [1, 2, 3, 4, 5, 6, 7]
numbers.push(7); // add one more 7 at the end [1, 2, 3, 4, 5, 6, 7, 7]
numbers.push(7); // again add 7 at the end [1, 2, 3, 4, 5, 6, 7, 7, 7]
numbers.shift(); // remove 1 i.e first element [2, 3, 4, 5, 6, 7, 7, 7]
numbers.push(7); // add one more 7 at the end [2, 3, 4, 5, 6, 7, 7, 7, 7]
numbers.unshift(7 - 6); // add 1 at the beginning [1, 2, 3, 4, 5, 6, 7, 7, 7, 7]
numbers.unshift(7 - 0); // add 7 at the beginning [7, 1, 2, 3, 4, 5, 6, 7, 7, 7, 7]
numbers.pop(); // [7, 1, 2, 3, 4, 5, 6, 7, 7, 7]
numbers.pop(); // [7, 1, 2, 3, 4, 5, 6, 7, 7]
numbers.pop(); // [7, 1, 2, 3, 4, 5, 6, 7]
numbers.pop(); // [7, 1, 2, 3, 4, 5, 6]
numbers.pop(); // [7, 1, 2, 3, 4, 5]
numbers.push(10); // [7, 1, 2, 3, 4, 5, 10]
console.log(numbers); // [7, 1, 2, 3, 4, 5, 10]
// Modifying Arrays by splice method (Replacing elements with new ones)
// Removes elements from an array and, if necessary, inserts new elements in their place, returning the deleted elements.
// @param start — The zero-based location in the array from which to start removing elements.
// @param deleteCount — The number of elements to remove.
// @param items — Elements to insert into the array in place of the deleted elements.
// @returns — An array containing the elements that were deleted.
let newArray = ["Abu Hurairah", "Naveed", "Ali", "Adnan"];
newArray.splice(1, 0, "Adnan");
console.log(newArray); // [ 'Abu Hurairah', 'Adnan', 'Naveed', 'Ali', 'Adnan' ]
newArray.splice(newArray.length, 0, "Waseem", "Bilal");
console.log("🚀 ~ newArray:", newArray); // ['Abu Hurairah','Adnan','Naveed','Ali','Adnan','Waseem','Bilal']
newArray.splice(newArray.length / 2, 1, "Waseem"); // at index 3 remove ali and replace it with waseem
console.log("🚀 ~ Afterdeleting", newArray); //  [ 'Abu Hurairah', 'Adnan', 'Naveed', 'Waseem','Adnan', 'Waseem', 'Bilal']
// todo list
// [wakeup, walk for 30 mins, ....]
// update it to lunch with friend
// Delete Dinner
// add Rest for 15 minute after lunch
let todos = [
    "Wake up",
    "Prayer",
    "Breakfast",
    "university",
    "Lunch",
    "assignment",
    "dinner",
];
todos.splice(4, 1, "Lunch With Friend"); // remove lunch at index 4 and replace it with "lunch with friend"
todos.splice(todos.length - 1, 1); // (6,1) remove dinner at index 6
todos.splice(5, 0, "rest"); // at index 5 insert rest; deleteCount = 0 (no elements to remove)
console.log(todos); // 
// DataTypes
//array is like a box that can hold any number of numbers, and you can add or remove numbers from it anytime.
//tuple is like a special box that can only hold a specific number of numbers, and once you put numbers in it, you can't add or remove any more
let newAray1 = ["aroona", "ali", "bilal"]; // array of strings
let newArray2 = [21, 48392, 74091283, 817234, 89742, 5849]; // arrays of numbers
// tuple
let tuple = ["Abu Hurairah", 21];
let tuple2 = [21, 48392, 74091283, 817234, 89742, 5849];
// In programming, a type annotation is a way to add extra information to your code to specify the data type of a variable, function, or parameter.
//In other words, type annotations are like labels that you add to your code to declare the type of data that a particular variable or function can hold or return.
// The : string and : string[] parts are type annotations. They indicate that:
// a and b are strings
// rest parameter is an array of strings
function myFunction(a, b, ...rest) {
    console.log(rest); // [c, d, e, f]
    console.log(rest[1]); // To access a specific element from the rest array
}
myFunction('a', 'b', 'c', 'd', 'e', 'f');
// Slicing
let newArr = ["Abu Hurairah", "Naveed", "Ali", "Adnan", "Rauf"];
let returnedArr = newArr.splice(0, 1); // ["Naveed", "Ali", "Adnan", "Rauf"];
let returnedVal = newArr.pop(); // ["Naveed", "Ali", "Adnan"];
console.log("🚀 returnedVal:", returnedVal);
console.log("🚀 returnedArr:", returnedArr);
// Accessing Elements
// arr[index]: Access an element at a specific index.
// arr[index] = value: Assign a new value to an element at a specific index. 
// "Ali" = "Rauf"
newArr[1] = "Rauf";
//  Searching Arrays
let index = newArr.lastIndexOf("Rauf"); // Returns the index of the last occurrence of a specified value in an array, or -1 if it is not present.
console.log("🚀 index:", index);
console.log(newArr);
// Loops
let nums1 = [1, 3, 5, 7, 9, 11, 13];
let nums2 = [2, 4, 6, 8, 10, 12, 14];
let result = [];
let totalSum = 0;
let i = 0;
while (i < nums2.length) {
    let sum = nums1[i] + nums2[i];
    result.push(sum);
    totalSum += sum;
    i++;
}
console.log(result);
console.log(totalSum);
// while (i < nums2.length) {
//   result.push(nums1[i]);
//   result.push(nums2[i]);
//   i++;
// }
// console.log(result); // [1,2,3,4,5,6,7,8,9,10,11,12,13,14]
// ---------------------------------
// slice 
const addValueInArray = (arr, index, value) => {
    let newArr = arr.slice(0); // creates a shallow copy of the original array
    newArr.splice(index, 0, value); // insert new element in array
    return newArr;
};
const returnedValue = addValueInArray(["Aroona", "amina"], 1, "bilal");
console.log("🚀 returnedValue:", returnedValue);
// ---------------------------------
let myName = "Aroona Ali";
console.log(myName[0]); // returns the first character of the string
console.log(myName.slice(0)); // returns a substring starting from index 0 to the end of the string
// ---------------------------------
// arrayMethod is defined to take two arguments: element (the element value) and index (the element's index in the array). 
// When map() calls arrayMethod, it passes the current element's value and index as arguments, so element receives the 
// element's value and index receives the element's index.
const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
const arrayMethod = (element, index) => {
    if ((index + element) % 2 === 0) {
        return "Even";
    }
    else {
        return "Odd";
    }
};
let mapReturn = arr.map(arrayMethod); // map() Calls a defined callback function on each element of an array, and returns a new array with the transformed elements.
console.log("🚀 mapReturn:", mapReturn);
//----------------------
const indiviuals = ["Aroona", "Umer", "Akbar", "bilal"];
const namesUpdate = (name) => {
    if (name === "Aroona") {
        return "Ms. Aroona";
    }
    return "Mr." + " " + `${name}`;
};
const newNames = indiviuals.map(namesUpdate);
console.log("🚀 newNames:", newNames);
//----------------------
let nums = [-1, 2, 3, -5, 4, -9, 8, -8, -8, -8];
const customFunction = (value) => {
    if (value < 0) {
        return "Negative";
    }
    else {
        return "Positive";
    }
};
const data = nums.map(customFunction);
console.log("🚀 data:", data);
// map() calls customFunction on each element of nums.
// customFunction checks if the element is less than 0 and returns "Negative" or "Positive" accordingly.
// map() collects the returned values and creates a new array with the transformed elements.
//----------------------
const id = [
    "Ali",
    "Aroona",
    "Bilal",
    "Umer",
    "Amina",
    "Akbar"
];
// const findName = (name: string) => {
//   return name.length;
// };
// const nameLengthArray = id.map(findName);
// console.log("🚀 namesLength:", nameLengthArray)
const namesLength = id.map((name) => name.length);
console.log("🚀 namesLength:", namesLength);
// When using arrow functions with a single expression, the return is implicit, meaning you don't need to explicitly use the return keyword.
// id.map((name: string) => name.length) is equivalent to:
// id.map((name: string) => {
//   return name.length;
// })
//---------------------
const num1 = [1, 2, 3, 4, 5, 6, 7];
const num2 = [7, 6, 5, 4, 3, 2, 1];
const sumArray = num1.map((value, index) => {
    return value + num2[index];
});
console.log("🚀 modified array:", sumArray);
// ---------------------------------
// Filter
const numArray = [1, 2, 3, 4, 5, 6, 7];
//  in order to access the index of elements in an array, you need to include the element (value) in 
// the callback function parameters, even if you're not using it in the condition.
const filteredArr = numArray.filter((value, index) => {
    if (index < 5) {
        return true; // Returns the elements of an array that meet the condition specified in a callback function.
    }
});
console.log("🚀 filteredArray:", filteredArr);
//--------------------
const breakfast = [
    "cherry",
    "bread",
    "egg",
    "milk"
];
const filteredNames = breakfast.filter((value) => {
    if (value !== "cold drink") {
        return true;
    }
});
console.log("🚀 filteredNames:", filteredNames);
//---------------------
