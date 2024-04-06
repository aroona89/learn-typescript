"use strict";
/* Q#36
T-Shirt: Write a function called make_shirt() that accepts a size and the text of a message that
should be printed on the shirt. */
Object.defineProperty(exports, "__esModule", { value: true });
function make_shirt(size, text) {
    console.log(`The message "${text}" has been printed on ${size} size shirt.`); // The function should print a sentence summarizing the size of the shirt and the message printed on it.
}
make_shirt("small", "coding is fun!"); //Call the function.
/* Q#37
Large Shirts: Modify the make_shirt() function so that shirts are large by default with a message that reads
I love TypeScript. Make a large shirt and a medium shirt with the default message, and a shirt of any size
with a different message. */
function make_shirtModify(size = "large", text = "I love TypeScript!") {
    console.log(`The message "${text}" has been printed on ${size} size shirt.`);
}
make_shirtModify(); //Call the function with default size and message values
make_shirtModify("medium"); //Call the function with default message
make_shirtModify("small", "i love coding!"); //Call the function with customized values
