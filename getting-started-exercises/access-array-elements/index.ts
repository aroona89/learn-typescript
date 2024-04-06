/* Q#11
Names: Store the names of a few of your friends in a array called names. 
Print each person’s name by accessing each element in the list, one at a time. */
var names: Array<string> = ["Asima", "Sameen", "Dua"];
console.log(names[0]);
console.log(names[1]);
console.log(names[2]);



/* Q#12
Greetings: Start with the array you used in Exercise 11, but instead of just printing each person’s name, 
print a message to them. The text of each message should be the same, but each message should be personalized 
with the person’s name. */
console.log(names[0], "lets plan a trip?");
console.log(names[1], "Lets plan a trip?");
console.log(`${names[2]} Lets plan a trip?`);