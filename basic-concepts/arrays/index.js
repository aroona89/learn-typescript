"use strict";
var stuRollNo = [1, 2, 3, 4, 5]; // index 0,1,2,3,4
console.log(stuRollNo[3]);
var stuName = ["aroona", "bilal", "amina", "umer"]; // index 0,1,2,3
console.log(stuName[2]);
// how to check whether an element is present in an array or not?
if (stuName.includes("amina")) {
    console.log("Last Child!");
}
/* arrays are mutable.
This means you can modify the elements present in an array after it's created.
You can change existing elements, add new elements, or remove elements from the array. */
stuRollNo[4] = 0;
console.log(stuRollNo[4]);
// built-in array functions 
let builtFunc = ["one", "two", "three", "four"];
builtFunc.push("five"); // Appends new elements to the end of an array, and returns the new length of the array.
console.log(builtFunc);
builtFunc.pop(); //Removes the last element from an array and returns it. 
console.log(builtFunc);
builtFunc.shift(); // Removes the first element from an array and returns it. 
console.log(builtFunc);
builtFunc.unshift("zero"); // Inserts new elements at the start of an array, and returns the new length of the array.
console.log(builtFunc);
builtFunc.splice(1, 0, "one"); // Removes elements from an array and, if necessary, inserts new elements in their place, 
console.log(builtFunc);
builtFunc.splice(5, 0, "five"); // splice acting as push
console.log(builtFunc);
builtFunc.splice(5, 1); // splice acting as pop
console.log(builtFunc);
builtFunc.splice(0, 1); // splice acting as shift
console.log(builtFunc);
builtFunc.splice(0, 0, "undefined"); // splice acting as unshift
console.log(builtFunc);
let newArray = [1, 2];
newArray.push(3, 4, 5, 6);
console.log("many values added at once:", newArray);
