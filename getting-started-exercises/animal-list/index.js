"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/* Q#35
Animals: Think of at least three different animals that have a common characteristic.
Store the names of these animals in a list. */
let petAnimals = ["dog", "cat", "rabbit"];
// and then use a for loop to print out the name of each animal.
for (const animal of petAnimals) {
    console.log(animal);
}
// Modify your program to print a statement about each animal, such as A dog would make a great pet. 
for (const animal of petAnimals) {
    console.log(`${animal} would be a great pet.`);
}
/* • Add a line at the end of your program stating what these animals have in common.
You could print a sentence such as Any of these animals would make a great pet! */
console.log("Any of these animals would make a great pet because they're very loving.");
