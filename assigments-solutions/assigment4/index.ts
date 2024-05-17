/* Q#1
Calculate your age based on the current year and your birth year. */

const myAge = (currentYear: number, birthYear: number) => {
  let age: number = currentYear - birthYear;
  console.log(`My current Age is ${age}.`);
};
myAge(2024, 2001);

/* Q#2
Write a program that calculates the area of a rectangle using length and width variables. */

const area = (length: number, width: number) => {
    let areaRectangle: number = length * width;
    console.log(`Area of a rectangle is ${areaRectangle} meter square.`);
};
area(12,32);

/* Q#3
Write a program that calculates the area of a circle. */

const circle = (pie: number, radius: number) => {
    let areaCircle: number = pie * Math.pow(radius,2)
    console.log(`Area of a circle is ${areaCircle} meter square.`);
};
circle(3.14, 32);  

/* Q#4
Write a program that calculates the area of the cube. */

const cube = (sides: number) => {
    let areaCube: number = 6 * Math.pow(sides,2);
    console.log(`Area of a cube is ${areaCube} meter square.`);
};
cube(12);


/* Q#5
Create a program that converts a temperature from Fahrenheit to Celsius and vice versa using a variable. */
// Q#5(i) Fahrenheit to Celsius

const temptFahrenheitToCelsius = (fahrenheitTemperature: number) => {
    let fahrenheitToCelsius: number = (5 / 9) * (fahrenheitTemperature - 32);
// BODMAS RULE /,* and +,- are of equal precedence (start solving from left to right)
console.log(`${fahrenheitTemperature} Fahrenheit in Celsius: ${fahrenheitToCelsius}`);
};
temptFahrenheitToCelsius(32);


// Q#5(ii) Celsius to Fahrenheit
const temptCelsiusToFahrenheit = (celsiusTemperature: number) => {
    let celsiusToFahrenheit: number = (9 / 5) * celsiusTemperature + 32;
    // BODMAS is an acronym for Brackets, Orders or Exponents, Division, Multiplication, Addition, Subtraction.
    console.log(`${celsiusTemperature} Celsius in Fahrenheit: ${celsiusToFahrenheit}`);
};
temptCelsiusToFahrenheit(32);


/* Q#6
Convert a given number of seconds into minutes and seconds using variables. */
// Q#6(i) Seconds into Minutes

const secondToMinute = (seconds: number) => {
    let secondsIntoMinutes: number = seconds / 60;
    console.log(`${seconds} second is equal to ${secondsIntoMinutes} minute.`);
};
secondToMinute(60);

// Q#6(ii) Minutes into Seconds

const minuteToSecond = (minutes: number) => {
    let MinuteIntoseconds: number = minutes * 60;
    console.log(`${minutes} minute is equal to ${MinuteIntoseconds} second .`);
};
minuteToSecond(1);

/* Q#7
Write a program that calculates the percentage. */

const calculatePercentage = (obtainedMarks: number,totalMarks: number) => {
    let percentage: number = (obtainedMarks / totalMarks) * 100; // BODMAS Rule (left to right)
    console.log(`Your Percenatge is ${percentage}%`);
};
calculatePercentage(89,100);


/* Q#1
Using conditional statements, check if the number is: Even or Odd. */
const checkEvenOdd = (numberEvenOdd: number) => {
    if (numberEvenOdd % 2 == 0) {
        console.log(`${numberEvenOdd} is Even.`);
    } else{
        console.log(`${numberEvenOdd} is Odd.`);
    }
};
checkEvenOdd(89);


/* Q#2
Using conditional statements, check if the number is: Positive, Negative, or Zero. */

const checkPositiveNegative = (numberPositiveNegative: number) => {
    if (numberPositiveNegative > 0) {
        console.log(`${numberPositiveNegative} is Positive.`);
    } else if (numberPositiveNegative < 0) {
        console.log(`${numberPositiveNegative} is Negative.`);  
    } else if (numberPositiveNegative = 0){
        console.log(`${numberPositiveNegative} is Zero.`);
    }
};
checkPositiveNegative(-89);

/* Q#3
Using conditional statements, check Whether the number is divisible by both 2 and 3 
or anyone of them or not divisible by both check all the cases and print statement for each case. */

const checkDivisible = (numberDivisible: number) => {
    if (numberDivisible % 2 == 0 && numberDivisible % 3 == 0) {
        console.log(`${numberDivisible} is divisible by both 2 and 3.`);
    } else if (numberDivisible % 2 == 0) {
        console.log(`${numberDivisible} is divisible by 2 but not 3.`);  
    } else if (numberDivisible % 3 == 0){
        console.log(`${numberDivisible} is divisible by 3 but not 2.`);
    } else{
        console.log(`${numberDivisible} is not divisible by either 2 or 3.`);
    }
};
checkDivisible(89)


/* Q#4
- Take the user age.
 -- If the age is 18 or above:
 -- Ask if they have a nationality of "Pakistani".
  ---If yes, print "You are eligible to vote."
  ---If no, print "Please obtain a valid ID to vote." */

const eligibleToVote = (userAge: number, userNationality: string) => {
    if (userAge>=18) {
        if (userNationality == "Pakistani") {
            console.log("You are eligible to vote.")
        } else {
            console.log("Please obtain a valid ID to vote.")
        }
    } else {
        console.log("A person, less than 18, is NOT ELIGIBLE to vote.")
    }

};
eligibleToVote(23, "Pakistani");

/* Q#5
Write a program that takes the age of a person as input and determines whether they are a child (0-12 years), 
teenager (13-19 years), adult (20-59 years), or senior citizen (60 years and above) */

const person = (age: number) => {
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
};
person(23);

/* Q#6
Enter a month (as a number between 1 and 12). Print the number of days in that month. Assume a non-leap year. */

const daysInMonth = (month: number) => {
    switch (month) {
        case 1:
            console.log("January has 31 Days.")
            break;
        case 2:
            console.log("February has 28 Days.")
            break;
        case 3:
            console.log("March has 31 Days.")
            break;
        case 4:
            console.log("April has 30 Days.")
            break;
        case 5:
            console.log("May has 31 Days.")
            break;
        case 6:
            console.log("June has 30 Days.")
            break;
        case 7:
            console.log("july has 31 Days.")
            break;
        case 8:
            console.log("August has 31 Days.")
            break;
        case 9:
            console.log("September has 30 Days.")
            break;
        case 10:
            console.log("October has 31 Days.")
            break;
        case 11:
            console.log("November has 30 Days.")
            break;
        case 12:
            console.log("December has 31 Days.")
            break;
        default:
            console.log("Enter Valid Month!")
            break;
    }

};
daysInMonth(9)

/* Q#7
Check if a year is a leap year or not. */
// conditional statement

const leapYear = (year: number) => {
    if (year % 4 == 0 && (year % 100 != 0 || year % 400 == 0)) {
        console.log(`${year} is a Leap Year.`);
      } else {
        console.log(`${year} is not a Leap Year.`);
    }
};
leapYear(2001)