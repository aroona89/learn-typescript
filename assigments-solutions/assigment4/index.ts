/* Q#1
- Create a function that takes an array, an index, and a value as parameters. 
Inside the function, use the splice method to insert the value at the specified index in the array. 
Return the modified array. */
const arrFunc = (array: number[], index: number, value: number) => {
  array.splice(index, 0, value); // modify the original array
  return array;
};
let array: number[] = [1, 2, 4, 5, 6];
console.log(arrFunc(array, 2, 3));

/* Q#2
- Implement a simple shopping cart program using an array. 
Create functions to add items, remove items, and update quantities using the splice method. 
Print the cart's contents after each operation */

// const shoppingCart = (arr: string[]): void=>{
//     arr.splice(1,0,"banana"); // insert
//     console.log("after adding:", arr); // item added
//     arr.splice(3,1); // remove
//     console.log("after removing:", arr); // item removed
//     arr.splice(0,1, "cherry"); // replace
//     console.log("cart updated:", arr); // cart updated
// }
// let arr = ["apple", "milk", "cold drink" ,"bread", "egg"]
// shoppingCart(arr);

const cart: { item: string; quantity: number }[] = [];

// Function to add items to the cart
function addItem(item: string, quantity: number) {
  cart.splice(cart.length, 0, { item, quantity }); // insert item at the end of the cart
  console.log(`Added ${item} to the cart.`);
  printCart();
}

// Function to remove items from the cart
function removeItem(item: string) {
  const index = cart.findIndex((cartItem) => cartItem.item === item);
  if (index !== -1) {
    cart.splice(index, 1); // Remove the item from the cart
    console.log(`Removed ${item} from the cart.`);
  } else {
    console.log(`Item not found in the cart.`);
  }
  printCart();
}

// Function to update items in the cart
function updateItem(item: string, newItem: string) {
  const index = cart.findIndex((cartItem) => cartItem.item === item);
  if (index !== -1) {
    cart[index].item = newItem; // Update the item
    console.log(`Updated ${item} to ${newItem}.`);
  } else {
    console.log(`Item not found in the cart.`);
  }
  printCart();
}

// Function to print the cart's contents
function printCart() {
  console.log(`Cart contents:`);
  cart.forEach((cartItem) =>
    console.log(`${cartItem.quantity} x ${cartItem.item}`)
  );
}

// Test the functions
addItem("Apple", 5);
addItem("Banana", 12);
removeItem("Apple");
updateItem("Banana", "Orange");
printCart();

// Q#3
// Write a program that uses a while loop to print the first 25 integers.

let intArray: number[] = [];
let i = 1;
const integers = () => {
  while (i <= 25) {
    intArray.push(i);
    i++;
  }
  console.log(intArray);
};
integers();

// Q#4
// Write a program that uses a while loop to print the first 10 even numbers.
let evenArray: number[] = [];
let e = 2;
let count = 0;

const evenNumbers = () => {
  while (count < 10) {
    evenArray.push(e);
    e += 2;
    count++;
  }
  console.log(evenArray);
};
evenNumbers();

// Q#5
// Create a function that takes a positive integer as parameter and uses a while loop to calculate
// and return the factorial of that number.

let result = 1;
let x = 1;
const factorial = (num: number): number => {
  while (x <= num) {
    result *= x;
    x++;
  }
  return result;
};
console.log("factorial:", factorial(5));

// Q#6
// Write a program having an array of numbers if the number is negative it should remove the negative number from the array.

let n = 0;
const negativeNumber = (array: number[]) => {
  while (n < array.length) {
    if (array[n] < 0) {
      array.splice(n, 1);
    } else {
      n++;
    }
  }
  console.log(array);
};
let negativeArray: number[] = [1, -5, 3, -9];
negativeNumber(negativeArray);

// Q#7
// Create a function that takes an array of numbers as parameter.
// Use a while loop to calculate and return the sum of all the numbers in the array.

function sumArray(arr: number[]) {
  let sum = 0;
  let i = 0;
  while (i < arr.length) {
    sum += arr[i];
    i++;
  }
  return sum;
}

const numbers = [1, 2, 3, 4, 5];
console.log("sum of numbers in array:", sumArray(numbers));

// Q#8
// Implement a program that takes a list of temperatures in Celsius as input from the user. 
// Convert each temperature to Fahrenheit using the formula F = (C * 9/5) + 32 and store the 
// converted temperatures in an array. 

function convertCtoF(temperaturesC: number[]) {
  const temperaturesF = [];
  let i = 0;
  while (i < temperaturesC.length) {
    const celsius = temperaturesC[i];
    const fahrenheit = (celsius * 9/5) + 32;
    temperaturesF.push(fahrenheit);
    i++;
  }
  return temperaturesF;
}

const temperaturesC = [0, 10, 20, 30, 40];
console.log("temperature in Fahrenheit:", convertCtoF(temperaturesC));


// function convertCtoF(temperaturesC: number[]) {
//     const temperaturesF = [];
//     for (let i = 0; i < temperaturesC.length; i++) {
//       const celsius = temperaturesC[i];
//       const fahrenheit = (celsius * 9/5) + 32;
//       temperaturesF.push(fahrenheit);
//     }
//     return temperaturesF;
//   }

//   const temperaturesC = [0, 10, 20, 30, 40];
//   const temperaturesF = convertCtoF(temperaturesC);
//   console.log(temperaturesF); 

// Q#9
// Write a program to remove all the odd numbers from an array.
const removeOddNumbers = (arr: number[]) => {
    const evenNumbers = [];
    let i = 0;
    while (i < arr.length) {
      if (arr[i] % 2 === 0) {
        evenNumbers.push(arr[i]);
      }
      i++;
    }
    return evenNumbers;
  };
  
const numArray = [1, 2, 3, 4, 5, 6, 7, 8, 9];
console.log("odd numbers removed:", removeOddNumbers(numArray));