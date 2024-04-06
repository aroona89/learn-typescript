/*  Q#2
Personal Message: Store a person’s name in a variable, and print a message to that person. 
Your message should be simple, such as, “Hello Eric, would you like to learn some Python today?” */
let firstName: string = "Aroona";
console.log(`Hello ${firstName}, would you like to learn some Python today?`);

/* Q#3
Name Cases: Store a person’s name in a variable, and then print that person’s name in lowercase, uppercase, and titlecase. */
let first_name: string = "Aroona aLI";
console.log(first_name.toLowerCase()); // print that person’s name in lowercase
console.log(first_name.toUpperCase()); // print that person’s name in uppercase
console.log(titlecase(first_name)); // print that person’s name in titlecase

// Title case refers to the capitalization of the first letter of each word in a sentence or string.
function titlecase(str:string): string {
    return str.split(' ').map( word => word[0].toUpperCase() + word.slice(1).toLowerCase()).join(' '); 
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


/* Q#4
Famous Quote: Find a quote from a famous person you admire. Print the quote and the name of its author. 
Your output should look something like the following, including the quotation marks: 
Albert Einstein once said, “A person who never made a mistake never tried anything new.” */
const quote = '\nProphet Muhammad (P.B.U.H) said, "The merciful will be shown mercy by the Most Mercifulﷻ. Be merciful to those on the earth, and the One in the heavens will have mercy upon you."';
console.log(quote);

/* Q#5
Famous Quote 2: Repeat Exercise 4, but this time store the famous person’s name in a variable called 
famous_person. Then compose your message and store it in a new variable called message. Print your message. */
let famous_person: string = "Prophet Muhammad (P.B.U.H)";
let message: string = "The merciful will be shown mercy by the Most Mercifulﷻ. Be merciful to those on the earth, and the One in the heavens will have mercy upon you."
console.log(`\n${famous_person} said, "${message}"`);

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

/* Q#7,8
Number Eight: Write addition, subtraction, multiplication, and division operations that each result in the 
number 8. Be sure to enclose your operations in print statements to see the results. */

// Aroona Ali 26 March 2024
// I have written a program using arithmetic operators +-*/
console.log("\naddition:", 4+4);
console.log("subtraction:", 12-4);
console.log("multiplication:", 2*4);
console.log("division:", 64/8);

/* Q#9
Favorite Number: Store your favorite number in a variable. Then, using that variable, create a message that 
reveals your favorite number. Print that message. */

// Aroona Ali 26 March 2024
// I have written a program to embed template literals i.e variables within string.
var fav_num: number = 89;
var message1: string = `\nMy Favourite Number is ${fav_num}`;
console.log(message1);

// Q#11
var names: Array<string> = ["Asima", "Sameen", "Dua"];
console.log(names[0]);
console.log(names[1]);
console.log(names[2]);

// Q#12
console.log(names[0], "lets plan a trip?");
console.log(names[1], "Lets plan a trip?");
console.log(`${names[2]} Lets plan a trip?`);

/* Q#13
Your Own Array: Think of your favorite mode of transportation, such as a motorcycle or a car,
and make a list that stores several examples. Use your list to print a series of statements about
these items, such as “I would like to own a Honda motorcycle.” */

var fav_transport: string[] = ['Bicycle', 'Car', 'Aeroplane']; // array of strings

// Method-1 (using for Loop)
for (var i=0; i < fav_transport.length; i++) {
  console.log(`I love to travel using ${fav_transport[i]}`);
}

// Method-2 (using for of Loop)
// for (var transport of fav_transport){
//     console.log(`I love to travel using ${transport}`);
// }

/* Q#14
Guest List: If you could invite anyone, living or deceased, to dinner, who would you invite? 
Make a list that includes at least three people you’d like to invite to dinner. 
Then use your list to print a message to each person, inviting them to dinner. */

var dinner_invite: Array<string> = ["Abu Hurairah", "Naveed Sarwar", "Daniyal Nagori", "Mubashir Ali", "Zia Ullah Khan"];
console.log("\nGUEST LIST:")

// (using for of Loop)
for (var invite of dinner_invite){
    console.log(`Dear ${invite}, you're warmly invited on an upcoming class dinner.`);
}

/* Q#15 
Changing Guest List: You just heard that one of your guests can’t make the dinner, 
so you need to send out a new set of invitations. You’ll have to think of someone else to invite. */

/*  Start with your program from Exercise 14. Add a print statement at the end of your 
program stating the name of the guest who can’t make it. */
console.log(`\nUnfortunately, ${dinner_invite[1]} can't make it to dinner.`)

/*  Modify your list, replacing the name of the guest who can’t make it with the name of the
new person you are inviting. */
dinner_invite[1] = "Arif Alvi";

// Print a second set of invitation messages, one for each person who is still in your list.
console.log("\nNEW GUEST LIST:")
for (var invite of dinner_invite){
    console.log(`Dear ${invite}, you're warmly invited on an upcoming class dinner.`);
}

/*Q#16
More Guests: You just found a bigger dinner table, so now more space is available. 
Think of three more guests to invite to dinner.

Start with your program from Exercise 15. Add a print statement to the end of your 
program informing people that you found a bigger dinner table. */
console.log("\nGood news! We found a bigger dinner table.")

// Add one new guest to the beginning of your array. 
dinner_invite.unshift("Kamran Tessori")

// Add one new guest to the middle of your array. 
dinner_invite.splice(3,0,"Ameen Alam")

// Use append() to add one new guest to the end of your list. 
dinner_invite.push("IMRAN KHAN")

// Print a new set of invitation messages, one for each person in your list. 
console.log("\nFinal GUEST LIST:")
for (var invite of dinner_invite){
    console.log(`Dear ${invite}, you're warmly invited on an upcoming class dinner.`);
}

/* Q#17 
Shrinking Guest List: You just found out that your new dinner table won’t arrive in time for the dinner, 
and you have space for only two guests.
Start with your program from Exercise 16. Add a new line that prints a message saying that you can invite
only two people for dinner. */

console.log("\nBad News! Space for only two guests.")

/* Remove guests from your list one at a time until only two names remain in your list. Each time 
you pop a name from your list, print a message to that person letting them know you’re sorry you can’t 
invite them to dinner. */

while (dinner_invite.length > 2){
    let removed_guest = dinner_invite.shift();
    console.log(`Dear ${removed_guest}, you're not invited for dinner.`);
}

console.log(dinner_invite);

// Print a message to each of the two people still on your list, letting them know they’re still invited.
for (var invite of dinner_invite){
    console.log(`Dear ${invite}, you're warmly invited.`);
}

/* Remove the last two names from your list, so you have an empty list. Print your list to make sure 
you actually have an empty list at the end of your program. */

while (dinner_invite.length = 0){
    dinner_invite.shift();
}
console.log("\nGuest list after removing all guests:", dinner_invite);

/* Q#18
Seeing the World: Think of at least five places in the world you’d like to visit.
Store the locations in a array. Make sure the array is not in alphabetical order. */
var placesToVisit: Array<string> = ["Saudi Arabia", "United States", "Russia ", "China", "United Kingdom"]

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

/* Q#19 
Dinner Guests: Working with one of the programs from Exercises 14 through 18, 
print a message indicating the number of people you are inviting to dinner. */
var guestCount = dinner_invite.length;
console.log("\nYou are inviting", guestCount, "people to dinner.");

/* Q#20
Think of something you could store in a array. For example, you could make a list of mountains, 
rivers, countries, cities, languages, or anything else you’d like. Write a program that creates
a list containing these items. */

// Array to store mountain names
var mountainList: string[] = [ 
    "Mount Everest", 
    "K2"
];
// Print the mountain list
console.log("\nMountain List:");
mountainList.forEach(mountain => console.log(mountain));

// Array to store river names
let rivers: string[] = ["Indus", "Ganges"];
// Print the river list
console.log("\nRiver List:");
rivers.forEach(river => console.log(river));

// Array to store country names
let countries: string[] = ["Pakistan", "India"];
// Print the country list
console.log("\nCountry List:");
countries.forEach(country => console.log(country));

// Array to store city names
let cities: string[] = ["Islamabad", "Mumbai"];
// Print the city list
console.log("\nCity List:");
cities.forEach(city => console.log(city));

// Array to store language names
let languages: string[] = ["English", "Urdu"];
// Print the language list
console.log("\nLanguage List:");
languages.forEach(language => console.log(language));

/* Q#21
They think of something you could store in a TypeScript Object. 
Write a program that creates Objects containing these items. */

// Example#1
interface Tourist {
    name: string;
    mountain: string;
    river: string;
    country: string;
    city: string;
    language: string;
  }

var tourists: Tourist[] = [
    {
        name: "Aroona ALi",
        mountain: "Mount Everest",
        river: "Indus",
        country: "Pakistan",
        city: "Islamabad",
        language: "Urdu"
    },
    {
        name: "Fatima Tariq",
        mountain: "K2",
        river: "Ganges",
        country: "India",
        city: "Mumbai",
        language: "English"
    }
];
// Print information about each tourist
console.log("\nInformation about Tourists:");
tourists.forEach(tourist => {
    console.log(`${tourist.name} lives in ${tourist.city} which is located in ${tourist.country},\nshe has climed ${tourist.mountain}, swimmed in ${tourist.river} and speaks a ${tourist.language} language.\n`);
});

// Example#2
// Define an array of city objects
var citiesName = [
    { name: "Islamabad", country: "Pakistan", population: 1.11 },
    { name: "Mumbai", country: "India", population: 12.48 },
];
console.log(typeof citiesName); // data type
// Print information about each city
console.log("\nInformation about Cities:");
citiesName.forEach(city => {
    console.log(`${city.name} is located in ${city.country} and has a population of ${city.population} million.`);
});

/* Q#22
Intentional Error: If you haven’t received an array index error in one of your programs yet, 
try to make one happen. Change an index in one of your programs to produce an index error. 
Make sure you correct the error before closing the program.*/

var fruit: Array<string> = ["apple", "banana", "orange", "cherry"]; //0,1,2,3
console.log("\nArray Index Error:", fruit[4]) // index out of bounds
for (var i=0; i < fruit.length; i++) {
    console.log(`${fruit[i]} is at index ${i}`);
}

/* Q#23
Conditional Tests: Write a series of conditional tests. Print a statement describing 
each test and your prediction for the results of each test. Your code should look something like this:
let car = 'subaru';
console.log("Is car == 'subaru'? I predict True.")
console.log(car == 'subaru')
• Look closely at your results, and make sure you understand why each line evaluates to True or False.
• Create at least 10 tests. Have at least 5 tests evaluate to True and another 5 tests evaluate to False. */

// Test 1 
let  stuName = 'AROONA ALI';
console.log("Is stuName == 'AROONA ALI'? I predict True.");
console.log(stuName == 'AROONA ALI');

// Test 2
let win = 1;
let fail = 0;
console.log("Is win >= fail? I predict True.");
console.log(win >= fail);

// Test 3
let sad = 0;
let happy = 100;
console.log("Is sad != happy? I predict True.");
console.log(sad != happy); 

// Test 4
let data1 = 67;
let data2 = 78;
console.log("Is data1 <= data2? I predict True.");
console.log(data1 <= data2); 

// Test 5
let education = true;
let grade = false;
console.log("Is education || grade? I predict True."); // logical OR operator
console.log(education || grade); 

// Test 6
let chinaPopulation = 1393;
let pakistanPopulation = 212.2;
console.log("Is pakistanPopulation < chinaPopulation? I predict True.");
console.log(pakistanPopulation < chinaPopulation); 

// Test 7
let num1 = 2;
let num2 = 4;
console.log("Is num1 == num2? I predict False.");
console.log(num1 == num2);

// Test 8
let abc = 'ABC'; // string literal
let num = 123; // numeric literal
console.log("Is abc == num? I predict False.");
console.log(num1 === num2);

// Test 9
let greater = 89;
let smaller = 9;
console.log("Is smaller > greater? I predict False.");
console.log(smaller > greater);

// Test 10
let mind = '100';
let heart = '100';
console.log("Is mind == heart? I predict False.");
console.log(mind != heart);

// Test 11
let rain = false;
let sun = true;
console.log("Is rain && sun? I predict False.");
console.log(rain && sun);


/* Q#24
More Conditional Tests: You don’t have to limit the number of tests you create to 10. 
If you want to try more comparisons, write more tests. 
Have at least one True and one False result for each of the following:
• Tests for equality and inequality with strings

• Tests using the lower case function

• Numerical tests involving equality and inequality, greater than and less than, 
greater than or equal to, and less than or equal to

• Tests using "and" and "or" operators

• Test whether an item is in a array

• Test whether an item is not in a array */

// Test for equality with strings
let eqString1: string = "HELLO";
let eqString2: string = "hello";
console.log("Is eqString1 == eqString2? I predict False.");
console.log(eqString1 == eqString2);

let inStr1: string = 'good';
let inStr2: string = 'good';
console.log("Is inStr1 == inStr2? I predict True.");
console.log(inStr1 == inStr2);

// Test for inequality with strings
let eqStr1: string = 'pass';
let eqStr2: string = 'fail';
console.log("Is eqStr1 != eqStr2? I predict True.");
console.log(eqStr1 != eqStr2);

let inequalNum: string = '23';
console.log("Is inequalNum != '50'? I predict True.");
console.log(inequalNum != '50');

// Tests using the lower case function

let lowerString1: string = "HELLO";
let lowerString2: string = "hello";
console.log("Is eqString1 == eqString2? I predict True.");
console.log(eqString1.toLowerCase() == eqString2.toLowerCase());

let lowerCaseString: string = "TypeScript";
console.log(`Is lowerCaseString.toLowerCase() == "TypeScript"? I predict False.`);
console.log(lowerCaseString.toLowerCase() == "TypeScript");

// Numerical tests involving equality

let numericalEquality: number = 100;
console.log(`Is numericalEquality === 100? I predict True.`);
console.log(numericalEquality === 100);

let falseEquality1: number = 45;
let falseEquality2: number = 46;

console.log(`Is falseEquality1 === falseEquality2? I predict False.`);
console.log(falseEquality1 === falseEquality2);


// Numerical tests involving inequality

let trueInequality: number = 23;
console.log(`Is trueInequality != 25? I predict True.`);
console.log(trueInequality != 25);

console.log(`Is 25 != 25? I predict False.`);
console.log(25 != 25);

let userObject; // Not initialized
console.log("Is userObject defined? I predict False.");
console.log(typeof userObject !== 'undefined');

// Numerical tests involving greater than

let temperature = 38;
console.log("Is temperature > 30? I predict True.");
console.log(temperature > 30); // True (temperature is greater than 30)

console.log("25 > 100? I predict False.");
console.log(25 > 100); // False (25 is less than 100)

// Numerical tests involving less than

console.log("25 < 89? I predict True.");
console.log(25 < 89); // true (25 is less than 100)

console.log("1 < 0? I predict False.");
console.log(1<0); // fasle (1 is greater than 0)

// Numerical tests involving greater than or equal to 

console.log("30 >= 20? I predict True.");
console.log(30 >= 20); // True (30>20 || 30==20)

console.log("25 >= 100? I predict False.");
console.log(25 >= 100); // False (25>100 || 25==100)

// Numerical tests involving less than or equal to
let points = 75;
console.log("Are points <= 80? I predict True.");
console.log(points <= 80); // True (75<80 || 75 == 80) 

console.log("2 <= 0? I predict False.");
console.log(2 <= 0); // False (2<0 || 2==0)

// Tests using "and" and "or" operators

console.log("true && false? I predict False.");
console.log(true && false); // False (a*b => 1*0 => 0 hence answer false)

console.log("0<1 && 2<3? I predict true.");
console.log(0<1 && 2<3); // true (true && true => 1 * 1 => 1 hence answer is true)

console.log("true || false? I predict true.");
console.log(true || false); // true (a+b => 1+0 => 1 hence answer true)

console.log("1<0 || 2>3? I predict false.");
console.log(1<0 || 2>3); // false (false || false => 0 + 0 => 0 hence answer is false)


let room: Array<string> = ["table", "chair", "bulb", "fan"]
console.log(room);

// Test whether an item is in a array
console.log(`room[1] == "chair"? I predict true.`);
console.log(room[1] == "chair");

console.log(`room[0] == "bed"? I predict false.`);
console.log(room[0] == "bed");

// Test whether an item is not in a array 
console.log(`room[1] != "chair"? I predict false.`);
console.log(room[1] != "chair");

console.log(`room[0] != "bed"? I predict true.`);
console.log(room[0] != "bed");


/* Q#25 
Alien Colors #1: Imagine an alien was just shot down in a game. 
Create a variable called alien_color and assign it a value of 'green', 'yellow', or 'red'.
• Write an if statement to test whether the alien’s color is green. 
If it is, print a message that the player just earned 5 points. */

var alien_color: string = 'green';

if (alien_color == 'green') {
    console.log("player just earned 5 points");
}

/* Write one version of this program that passes the if test and another that fails. 
(The version that fails will have no output.) */

if (alien_color == 'green') {
    console.log("player just earned 5 points");
} else {
}

/* Q#26 
Alien Colors #2: Choose a color for an alien as you did in Exercise 25, and write an if-else chain. 
 If the alien’s color is green, print a statement that the player just earned 5 points for shooting the alien. */
if (alien_color == 'green') {
    console.log("player just earned 5 points for shooting the alien.");
}
// If the alien’s color isn’t green, print a statement that the player just earned 10 points.
if (alien_color == 'red') {
    console.log("player just earned 10 points for shooting the alien.");
}
// Write one version of this program that runs the if block and another that runs the else block. 

if (alien_color == 'green') {
    console.log("player just earned 5 points for shooting the alien.");
}
else {
    console.log("player just earned 10 points for shooting the alien.");
}


/* Q#27
Alien Colors #3: Turn your if-else chain from Exercise 5-4 into an if-else chain.
• If the alien is green, print a message that the player earned 5 points. */
if (alien_color == 'green') {
    console.log("player earned 5 points.");
}
// • If the alien is yellow, print a message that the player earned 10 points.
if (alien_color == 'yellow') {
    console.log("player earned 10 points.");
}

//• If the alien is red, print a message that the player earned 15 points.
if (alien_color == 'red') {
    console.log("player earned 15 points.");
}
// • Write three versions of this program, making sure each message is printed for the appropriate color alien.
if (alien_color == 'green') {
    console.log("player earned 5 points.");
} else if (alien_color == 'yellow') {
    console.log("player earned 10 points.");
} else {
    console.log("player earned 15 points.");
}

/* Q#28 
Stages of Life: Write an if-else chain that determines a person’s stage of life. 
Set a value for the variable age, and then:
• If the person is less than 2 years old, print a message that the person is a baby. */
var age: number = 23;

if (age < 2) {
    console.log("the person is a baby.");
}

//• If the person is at least 2 years old but less than 4, print a message that the person is a toddler.
else if (age >= 2 && age < 4) {
    console.log("the person is a toddler.");
}

//• If the person is at least 4 years old but less than 13, print a message that the person is a kid.
else if (age >= 4 && age < 13) {
    console.log("the person is a kid.");
}

//• If the person is at least 13 years old but less than 20, print a message that the person is a teenager.
else if (age >= 13 && age < 20) {
    console.log("the person is a teenager.");
}

//• If the person is at least 20 years old but less than 65, print a message that the person is an adult.
else if (age >= 20 && age < 65) {
    console.log("the person is a adult.");
}

//• If the person is age 65 or older, print a message that the person is an elder.
else {
    console.log("the person is a elder.");
}

/* Q#29
Favorite Fruit: Make a array of your favorite fruits, and then write a series of independent
if statements that check for certain fruits in your array.
• Make a array of your three favorite fruits and call it favorite_fruits. */
var favorite_fruits: Array<string> = ['banana', 'cherry', 'pineapple'];

/* • Write five if statements. Each should check whether a certain kind of fruit is in your array. 
If the fruit is in your array, the if block should print a statement, such as You really like bananas! */
if (favorite_fruits.includes("orange")) {
}
if (favorite_fruits.includes("banana")) {
    console.log("I really like Bananas!")
}
if (favorite_fruits.includes("grapes")) {
}
if (favorite_fruits.includes("cherry")) {
    console.log("I really like Cherry!")
}
if (favorite_fruits.includes("pineapple")) {
    console.log("I really like Pineapple!")
}

/*Q#30
Hello Admin: Make a array of five or more usernames, including the name 'admin'. 
Imagine you are writing code that will print a greeting to each user after they log in to a website. 
Loop through the array, and print a greeting to each user:
• If the username is 'admin', print a special greeting, such as Hello admin, would you like 
to see a status report?
• Otherwise, print a generic greeting, such as Hello Eric, thank you for logging in again. */

var userName: Array<string> = ["admin", "aroona89", "naveed_sarwar", "user123", "stu_4"]
for  (const user of userName) {
    if (user == 'admin') {
        console.log(`Hello ${user}, would you like to see a status report?`);
    } else {
        console.log(`hello ${user}, thank you for loggging in again.`);
    }

}

/* Q#31
No Users: Add an if test to Exercise 30 to make sure the list of users is not empty.
• If the list is empty, print the message We need to find some users! */

//• Remove all of the usernames from your array, and make sure the correct message is printed.

var userName: string[] = [];
if (userName.length == 0) {
    console.log("We need to find some users!")
} else {
    for (let user of userName) {
        if (user == 'admin') {
            console.log(`Hello ${user}, would you like to see a status report?`);
        } else {
            console.log(`hello ${user}, thank you for loggging in again.`);
        }
    }
}

/*Q#32
Checking Usernames: Do the following to create a program that simulates how websites
ensure that everyone has a unique username.
• Make a list of five or more usernames called current_users. */
var current_users: string[] = ['john', 'akbar', 'aroona', 'amina', 'BILAL'];
/* • Make another list of five usernames called new_users. 
Make sure one or two of the new usernames are also in the current_users list. */
var new_users: string[] = ['aroona', 'JOHN', 'umer', 'fatima', 'bilal']

// Convert all usernames in current_users to lowercase
let current_users_lower: string[] = current_users.map(user => user.toLowerCase());

/* • Loop through the new_users list to see if each new username has already been used. 
If it has, print a message that the person will need to enter a new username. 
If a username has not been used, print a message saying that the username is available. 
• Make sure your comparison is case insensitive. If 'John' has been used, 'JOHN' should not be accepted. */

for (let new_user of new_users) { // Iterates over the values
    // Convert new_user to lowercase for case-insensitive comparison
    let new_user_lower: string = new_user.toLowerCase();
    if (current_users_lower.includes(new_user_lower)) {
        console.log(`${new_user_lower} is already taken. Enter a new username!`);
    } else {
        console.log(`${new_user_lower} is available!`);
    }
}

/* Q#33
Ordinal Numbers: Ordinal numbers indicate their position in a array, such as 1st or 2nd. 
Most ordinal numbers end in th, except 1, 2, and 3. */

// • Store the numbers 1 through 9 in a array.
let ordinalNumber: number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9];

// method-1
// • Loop through the array.
for (let index = 0; index < ordinalNumber.length; index++) {
    const number = ordinalNumber[index];
    let ordinalSuffix: string;
    /* • Use an if-else chain inside the loop to print the proper ordinal ending for each number. 
    Your output should read "1st 2nd 3rd 4th 5th 6th 7th 8th 9th", and each result should be on a separate line. */
    if (number == 1) {
        ordinalSuffix = 'st'
    } else if (number == 2) {
        ordinalSuffix = 'nd'

    } else if (number == 3) {
        ordinalSuffix = 'rd'

    } else {
        ordinalSuffix = 'th'
    }
    console.log(`${number}${ordinalSuffix}`)

}

// method-2
// for (let iterator of ordinalNumber) {
//     if (iterator == 1 ) {
//         console.log(`${iterator}st`)
//     } else if (iterator == 2) {
//         console.log(`${iterator}nd`)

//     } else if (iterator == 3) {
//         console.log(`${iterator}rd`)

//     } else {
//         console.log(`${iterator}th`)
//     }
// }


// method-3
// for (let number of ordinalNumber) {
//     let suffix;
// switch (number) {
//     case 1:
//         suffix = "st";
//         break;
//     case 2:
//         suffix = "nd";
//         break;
//     case 3:
//         suffix = "rd";
//         break;

//     default:
//         suffix = "th";
//         break;
// }
//     console.log(`${number}${suffix}`)
// }


/* Q#34
Pizzas: Think of at least three kinds of your favorite pizza. 
Store these pizza names in a array, and then use a for loop to print the name of each pizza. */
let pizzaTypes: string[] = ["chicken tandoori", "chicken tikka", "Fajita"]
for (const pizza of pizzaTypes) {
    console.log(pizza);
}
/* Modify your for loop to print a sentence using the name of the pizza instead of printing 
just the name of the pizza. For each pizza you should have one line of output containing a 
simple statement like I like pepperoni pizza. */
for (const pizza of pizzaTypes) {
    console.log(`I love ${pizza} Pizza!`);
}
/* • Add a line at the end of your program, outside the for loop, that states how much you like pizza. 
The output should consist of three or more lines about the kinds of pizza you like and then an additional
sentence, such as I really love pizza! */
console.log("I really love pizza!")

/* Q#35
Animals: Think of at least three different animals that have a common characteristic. 
Store the names of these animals in a list. */
let petAnimals: string[] = ["dog", "cat", "rabbit"];
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
console.log("Any of these animals would make a great pet because they're very loving.")

/* Q#36
T-Shirt: Write a function called make_shirt() that accepts a size and the text of a message that 
should be printed on the shirt. */

function make_shirt(size: string, text: string) {
    console.log(`The message "${text}" has been printed on ${size} size shirt.`) // The function should print a sentence summarizing the size of the shirt and the message printed on it.
}
make_shirt("small", "coding is fun!")//Call the function.

/* Q#37
Large Shirts: Modify the make_shirt() function so that shirts are large by default with a message that reads 
I love TypeScript. Make a large shirt and a medium shirt with the default message, and a shirt of any size 
with a different message. */

function make_shirtModify(size: string = "large", text: string = "I love TypeScript!"): void {
    console.log(`The message "${text}" has been printed on ${size} size shirt.`)
}
make_shirtModify()//Call the function with default size and message values
make_shirtModify("medium")//Call the function with default message
make_shirtModify("small", "i love coding!")//Call the function with customized values

/* Q#38
Cities: Write a function called describe_city() that accepts the name of a city and its country. 
The function should print a simple sentence, such as Karachi is in Pakistan. 
Give the parameter for the country a default value. */

function describe_city(city: string, country: string = "Pakistan") {
    console.log(`${city} is in ${country}`)
}
// Call your function for three different cities, at least one of which is not in the default country. 
describe_city("faisalabad")
describe_city("lahore")
describe_city("New York", "US")

/* Q#39
City Names: Write a function called city_country() that takes in the name of a city and its country. 
The function should return a string formatted like this:
"Lahore, Pakistan" */

function city_country(city: string, country: string): string {
    const formattedString: string = `"${city}, ${country}"`
    return formattedString
}

// Call your function with at least three city-country pairs, and print the value that’s returned. 
let result1: string = city_country("Lahore", "Pakistan")
console.log(result1);
let result2: string = city_country("New York", "US")
console.log(result2);
let result3: string = city_country("Mumbai", "India")
console.log(result3);

// method-2 using ARROW FUNCTION (ANONYMOUS FUNCTION)
// let cityCountry = (city:string, country: string) => `"${city}, ${country}"`
// let result4: string = cityCountry("Lahore", "Pakistan")
// console.log(result4);
// let result5: string = cityCountry("New York", "US")
// console.log(result5);
// let result6: string = cityCountry("Mumbai", "India")
// console.log(result6);


/* Q#40 
Album: Write a function called make_album() that builds a Object describing a music album. 
The function should take in an artist name and an album title, 
and it should return a Object containing these two pieces of information. 
Use the function to make three dictionaries representing different albums. 
Print each return value to show that Objects are storing the album information correctly. 
Add an optional parameter to make_album() that allows you to store the number of tracks on an album. 
If the calling line includes a value for the number of tracks, add that value to the album’s Object. 
Make at least one new function call that includes the number of tracks on an album. */

// function make_album(artist_name: string, album_title: string): object {
//     let music_album = {
//        name: artist_name,
//        title: album_title
//     }
//     return music_album  
// }
// let album = make_album("atif aslam","nasheed")
// console.log(typeof album);
// console.log(album);

interface music_album {
    name: string;
    title: string;
    tracks?: number; // Optional property
}

function make_album(artist_name: string, album_title: string, tracks?: number): music_album {
    let music_album: music_album = {
        name: artist_name,
        title: album_title,
    };

    // Check if tracks parameter is provided
    if (tracks !== undefined) {
        music_album.tracks = tracks;
    }
    return music_album
}
let album1 = make_album("muhammad al muqit", "nasheed")
// console.log(typeof album1);
console.log(album1);
let album2 = make_album("omar esa", "nasheed")
console.log(album2);
let album3 = make_album("atif aslam", "sad song")
console.log(album3);
let album4 = make_album("arjit sing", "sad song", 2)
console.log(album4);

/* Q#41
Magicians: Make an array of magician’s names. 
Pass the array to a function called show_magicians(), which prints the name of each magician in the array. */

let magicianNames: string[] = ["abc", "xyz", "unknown"]

function show_magicians(magicians: string[]) {
    for (const magician of magicians) {
        console.log(magician);
    }
}
show_magicians(magicianNames)


/* Q#42
Great Magicians: Start with a copy of your program from Exercise 41. 
Write a function called make_great() that modifies the array of magicians by adding the phrase the Great to
each magician’s name. Call show_magicians() to see that the list has actually been modified. */

function make_great(magicians: string[]): string[] {
    let greatMagicianNames: string[] = []; // Create a new empty array
    for (const magician of magicians) {
        greatMagicianNames.push(`Great ${magician}`)
    }
    return greatMagicianNames // Return the new array with modifications
}
// let greatMagicianNames = make_great([...magicianNames]) // "spread syntax" or "spread operator" is used to create a shallow copy 
let greatMagicianNames = make_great(magicianNames.slice()) // Returns a copy of a section of an array.
show_magicians(greatMagicianNames)

/*Q#43
Unchanged Magicians: Start with your work from Exercise 42. 
Call the function make_great() with a copy of the array of magicians’ names. 
Because the original array will be unchanged, return the new array and store it in a separate array. 
Call show_magicians() with each array to show that you have one array of the original names and one 
array with the Great added to each magician’s name. */

// Create a copy of the original array
let greatAdded = make_great(magicianNames)
show_magicians(magicianNames)
show_magicians(greatAdded)

/*Q#44
Sandwiches: Write a function that accepts a array of items a person wants on a sandwich. 
The function should have one parameter that collects as many items as the function call provides, 
and it should print a summary of the sandwich that is being ordered. Call the function three times, 
using a different number of arguments each time. */

/* A rest parameter in TypeScript allows a function to accept an any number of arguments as an array. 
It is denoted by three consecutive dots (...) followed by the parameter name. */
function sandwich(...sandwichItems: string[]) { // rest parameter collects all arguments passed to the function into an array.
    console.log("Making a sandwich with the following ingredients:");
    sandwichItems.forEach((item, index) => {
        console.log(`${index + 1}. ${item}`);
    });
    // for (const item of sandwichItems) {
    //     console.log();       
    // }
}
sandwich("Bread", "egg", "Tomato")
sandwich("Bread", "cheese", "chicken")
sandwich("Bread", "mayonnaise", "chicken")


/* Q#45
Cars: Write a function that stores information about a car in a Object. 
The function should always receive a manufacturer and a model name. 
It should then accept an arbitrary number of keyword arguments. 
Call the function with the required information and two other name-value pairs, 
such as a color or an optional feature. 
Print the Object that’s returned to make sure all the information was stored correctly. */
function createCar(manufacturer: string, model: string, ...optional: any[]) {
    const car: { [key: string]: any } = {
        manufacturerKey: manufacturer,
        modelKey: model
    };
    // Loop through the extras array and add each extra property to the car object
    optional.forEach(([key, value]) => {
        car[key] = value;
    });
    return car;
}
const carInfo = createCar("Honda", "Civic", ['color', 'blue'], ['year', 2022])
// Print the returned object
console.log(carInfo);
// console.log(typeof carInfo);





























