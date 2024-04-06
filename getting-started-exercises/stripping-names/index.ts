/* Q#6
Stripping Names: Store a person’s name, and include some whitespace characters at the beginning and end of 
the name. Make sure you use each character combination, "\t" and "\n", at least once. Print the name once, 
so the whitespace around the name is displayed. Then print the name after striping the white spaces.*/

// Aroona Ali 26 March 2024
// I have written a program to remove whitespace characters \t and \n
var person_name = "\n \tAroona \nAli";
console.log(person_name);
var strip_name = person_name.trim().split("\n").join("");
console.log(strip_name);

/* EXPLANATION: .trim() method Removes the leading and trailing white space, 
.split() method Split a string into substrings using the specified separator here \n - new line
and return them as an array. .join() method Adds all the elements of an array into a string. */