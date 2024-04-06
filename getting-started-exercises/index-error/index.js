"use strict";
/* Q#22
Intentional Error: If you haven’t received an array index error in one of your programs yet,
try to make one happen. Change an index in one of your programs to produce an index error.
Make sure you correct the error before closing the program.*/
Object.defineProperty(exports, "__esModule", { value: true });
var fruit = ["apple", "banana", "orange", "cherry"]; //0,1,2,3
console.log("\nArray Index Error:", fruit[4]); // index out of bounds
// for (var i=0; i < fruit.length; i++) {
//     console.log(`${fruit[i]} is at index ${i}`);
// }
