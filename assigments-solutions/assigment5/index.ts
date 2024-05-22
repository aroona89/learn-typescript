// Q#1 Write a program that uses filter to remove all negative numbers from an array of numbers
const negativeNumberArray = [2, -7, 4, -1, 5, -3, -6];
const filterNegativeNumber = (value: number)=>{
  return value>0 // boolean; true or false
}
const filteredNumbers = negativeNumberArray.filter(filterNegativeNumber);
console.log("filtered negative numbers:", filteredNumbers);

// Q#2 Given an array of numbers [1, 2, 3, 4, 5], use the map method to create a new array where each number is multiplied by 2.
const multiplyArray = [1, 2, 3, 4, 5];
const multiplyArrayWithTwo = (value: number) =>{
  return value*2
}
const multipliedArray = multiplyArray.map(multiplyArrayWithTwo);
console.log("multiplied Array:", multipliedArray);

/* Q#3 Given an array of strings ["apple", "banana", "cherry", "date", "grape"], 
use the filter method to create a new array containing only the fruits with more than 5 characters. */

const fruitsArray = ["apple", "banana", "cherry", "date", "grape"];
const checkFruitLength = (value: string) => {
  return value.length > 5 // boolean; true or false
}
const fiveCharacterFruit = fruitsArray.filter(checkFruitLength);
console.log(fiveCharacterFruit);

/* Q#4 Given an array of numbers [1, 2, 3, 4, 5, 6, 7, 8, 9, 10], use the map and filter methods 
together to create a new array containing the squares of even numbers. */

const originalArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// const evenNumber = (value: number) =>{
//   return value % 2 === 0
// }
// const evenNumberArray = originalArray.filter(evenNumber);

// const squareOfEvenNumbers = (value: number, index: number)=>{
//     return Math.pow(value,2)
// }
// const squareOfEvenNumbersArray = evenNumberArray.map(squareOfEvenNumbers)
// console.log("square of even numbers:", squareOfEvenNumbersArray);

const squareOfEvenNumbers = originalArray.filter(value => value % 2 === 0).map(value => Math.pow(value,2));
console.log("squre of even numbers:",squareOfEvenNumbers);

/* Q#5 Given an array of temperatures in Celsius [0, 10, 20, 30, 40], use the map method to create a 
new array where each temperature is converted to Fahrenheit using the formula (Celsius * 9/5) + 32. */
const celsiusTemperatureArray = [0, 10, 20, 30, 40];
const celsiusToFahrenheit = (value:number) =>{
  const tempt = (value * 9 / 5) + 32;
  return tempt;
}
const fahrenheitTemperatureArray = celsiusTemperatureArray.map(celsiusToFahrenheit);
console.log("Celsius to Fahrenheit:", fahrenheitTemperatureArray);


/* Q#6  Given an array of numbers [3, 6, 9, 12, 15, 18], use the map and filter methods together 
to create a new array containing the doubled values of odd numbers. */
const array = [3, 6, 9, 12, 15, 18];
const doubleOfOddArray = array.filter(value => value % 2 !== 0).map(value=> value + value);
console.log(doubleOfOddArray);

