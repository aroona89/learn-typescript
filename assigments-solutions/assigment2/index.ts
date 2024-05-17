/* Q#1
Using conditional statements, check if the number is: Even or Odd. */
let numberEvenOdd: number = 89;
if (numberEvenOdd % 2 == 0) {
    console.log(`${numberEvenOdd} is Even.`);
} else{
    console.log(`${numberEvenOdd} is Odd.`);
}

/* Q#2
Using conditional statements, check if the number is: Positive, Negative, or Zero. */
let numberPositiveNegative: number = -89;
if (numberPositiveNegative > 0) {
    console.log(`${numberPositiveNegative} is Positive.`);
} else if (numberPositiveNegative < 0) {
    console.log(`${numberPositiveNegative} is Negative.`);  
} else if (numberPositiveNegative = 0){
    console.log(`${numberPositiveNegative} is Zero.`);
}

/* Q#3
Using conditional statements, check Whether the number is divisible by both 2 and 3 
or anyone of them or not divisible by both check all the cases and print statement for each case. */

let numberDivisible: number = 89;
if (numberDivisible % 2 == 0 && numberDivisible % 3 == 0) {
    console.log(`${numberDivisible} is divisible by both 2 and 3.`);
} else if (numberDivisible % 2 == 0) {
    console.log(`${numberDivisible} is divisible by 2 but not 3.`);  
} else if (numberDivisible % 3 == 0){
    console.log(`${numberDivisible} is divisible by 3 but not 2.`);
} else{
    console.log(`${numberDivisible} is not divisible by either 2 or 3.`);
}

/* Q#4
- Take the user age.
 -- If the age is 18 or above:
 -- Ask if they have a nationality of "Pakistani".
  ---If yes, print "You are eligible to vote."
  ---If no, print "Please obtain a valid ID to vote." */

let userAge: number = 23;
let userNationality: string = "Pakistani";

if (userAge>=18) {
    if (userNationality == "Pakistani") {
        console.log("You are eligible to vote.")
    } else {
        console.log("Please obtain a valid ID to vote.")
    }
} else {
    console.log("A person, less than 18, is NOT ELIGIBLE to vote.")
}

/* Q#5
Write a program that takes the age of a person as input and determines whether they are a child (0-12 years), 
teenager (13-19 years), adult (20-59 years), or senior citizen (60 years and above) */

let age: number = 23;
if (age>=0 && age<13) {
    console.log("A Child!")
} else if (age>=13 && age<20){
    console.log("A Teenager!")   
} else if (age>=20 && age<60){
    console.log("An Adult!")
} else if (age>=60){
    console.log("A Senior Citizen!")
} else {
    console.log("Enetr Valid Age!")
}


/* Q#6
Enter a month (as a number between 1 and 12). Print the number of days in that month. Assume a non-leap year. */
let month: string = "sep";

// Method 1
switch (month) {
  case "jan":
  case "mar":
  case "may":
  case "jul":
  case "aug":
  case "oct":
  case "dec":
    console.log(`${month} has 31 Days.`);
    break;
  case "feb":
    console.log(`${month} has 28 Days.`);
    break;
  case "apr":
  case "jun":
  case "sep":
  case "nov":
    console.log(`${month} has 30 Days.`);
    break;
  default:
    console.log("Enter Valid Month!");
    break;
}

// Method 2
// if (month === 1 || month === 3 || month === 5 || month === 7 || month === 8 || month === 10 || month === 12){
//     console.log("This Month has 31 Days.");
// } else if (month === 2){
//     console.log("This Month has 28 Days.");  
// } else if (month === 4 || month === 6 || month === 9 || month === 11){
//     console.log("This Month has 30 Days.");
// } else{
//     console.log("Enter Valid Month [1-12]");
// }

/* Q#7
Check if a year is a leap year or not. */
// conditional statement
let year: number = 2001;
if (year % 4 == 0 && (year % 100 != 0 || year % 400 == 0)) {
    console.log(`${year} is a Leap Year.`);
  } else {
    console.log(`${year} is not a Leap Year.`);
  }