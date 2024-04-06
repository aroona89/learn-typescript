"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/* Q#18
Seeing the World: Think of at least five places in the world you’d like to visit.
Store the locations in a array. Make sure the array is not in alphabetical order. */
var placesToVisit = ["Saudi Arabia", "United States", "Russia ", "China", "United Kingdom"];
// Print your array in its original order.
console.log("\nOriginal Order:");
console.log(placesToVisit);
// Print your array in alphabetical order without modifying the actual list.
console.log("\nAlphabetical order:");
console.log([...placesToVisit].sort()); // Spread Context
// Show that your array is still in its original order by printing it.
console.log("\nOriginal Order (unchanged):");
console.log(placesToVisit);
// Print your array in reverse alphabetical order without changing the order of the original list.
console.log("\nReverse Alphabetical Order:");
console.log([...placesToVisit].sort().reverse());
// Show that your array is still in its original order by printing it again.
console.log("\nOriginal Order (unchanged):");
console.log(placesToVisit);
// Reverse the order of your list. Print the array to show that its order has changed.
placesToVisit.reverse();
console.log("\nOriginal Order (changed):");
console.log(placesToVisit);
// Reverse the order of your list again. Print the list to show it’s back to its original order.
placesToVisit.reverse();
console.log("\nBack to original order:");
console.log(placesToVisit);
/* Sort your array so it’s stored in alphabetical order.
Print the array to show that its order has been changed. */
placesToVisit.sort();
console.log("\nSorted in alphabetical order:");
console.log(placesToVisit);
/* Sort to change your array so it’s stored in reverse alphabetical order.
Print the list to show that its order has changed. */
placesToVisit.sort().reverse();
console.log("\nSorted in reverse alphabetical order:");
console.log(placesToVisit);
