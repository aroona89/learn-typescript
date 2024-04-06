"use strict";
/*Q#44
Sandwiches: Write a function that accepts a array of items a person wants on a sandwich.
The function should have one parameter that collects as many items as the function call provides,
and it should print a summary of the sandwich that is being ordered. Call the function three times,
using a different number of arguments each time. */
Object.defineProperty(exports, "__esModule", { value: true });
/* A rest parameter in TypeScript allows a function to accept an any number of arguments as an array.
It is denoted by three consecutive dots (...) followed by the parameter name. */
function sandwich(...sandwichItems) {
    console.log("Making a sandwich with the following ingredients:");
    sandwichItems.forEach((item, index) => {
        console.log(`${index + 1}. ${item}`);
    });
    // for (const item of sandwichItems) {
    //     console.log();       
    // }
}
sandwich("Bread", "egg", "Tomato");
sandwich("Bread", "cheese", "chicken");
sandwich("Bread", "mayonnaise", "chicken");
