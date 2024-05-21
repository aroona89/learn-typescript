// Q#1 Write a program that uses filter to remove all negative numbers from an array of numbers
const negativeNumberArray = [2, -7, 4, -1, 5, -3, -6];
const filterNegativeNumber = (value: number)=>{
  return value>0
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
  return value.length > 5
}
const fiveCharacterFruit = fruitsArray.filter(checkFruitLength);
console.log(fiveCharacterFruit);