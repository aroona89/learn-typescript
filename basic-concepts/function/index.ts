// write a program using function to add two numbers
function sum(num1: number, num2: number) {
  // reusability, comma seperated parameter
  console.log("result=", num1 + num2); // function body, function defination
}
sum(20, 19); // call, argument

// write a program using function to add two numbers and add number 50 in result after performing calculations
function sumNum(num1: number, num2: number): number {
  // reusability, comma seperated parameter, define datatype of return by :number
  var output: number = num1 + num2;
  return output;
}
var addOutput: number = sumNum(20, 19);
addOutput += 50;
console.log("result=", addOutput);

/* write a program using functions to convert the temperature
from celsius to fahrenheit */
function tempConvert(num: number) {
  var fahrenheit = num * (9 / 5) + 32;
  console.log(`Temperature in Fahrenheit will be ${fahrenheit}`);
}
tempConvert(32);

// write a prgram using function that calculates the percentage.
function calPercentageWithParameters(
  obtained_marks: number,
  total_marks: number
) {
  var percentage_marks = (obtained_marks / total_marks) * 100;
  console.log(`Marks in Percentage will be ${percentage_marks}%`);
}
calPercentageWithParameters(67, 100);

// arrow function, anonymous function
//  var million = (num1: number, num2: number):number => {
//     return num1+num2
//  }
// curly brackets use ki jati hai lines of code ka block bnane ke liye, lqn ek line ka kya block bnana iz liye nahi lgate for single statement
var million = (num1: number, num2: number): number => num1 + num2;
var sumMillion: number = million(2, 5);
console.log((sumMillion += 3));

var sumArrow = (num1: number, num2: number): number => {
  var result: number = num1 + num2;
  return result;
};
var updateSum: number = sumArrow(40, 40);
console.log(typeof sumArrow);
console.log(`sum is: ${updateSum}`);

// function synatx with return data type
function testing(): string {
  return "hello world!";
}
console.log(testing());

// data type of a function which don't return anything
function dontreturn(): void {
  console.log("hello world!");
}
dontreturn();

// Arrow Function
const arrFunc = () => {
  console.log("Arrow Function!");
};
arrFunc();

// Arrow Function with parameters
const arrFuncWithParameters = (name: string): void => {
  console.log("name:", name);
};
arrFuncWithParameters("aroona");

// Arrow Function with rtuen type
const arrFuncWithReturnType = (): string => {
    return "arrow function with return type!"
  };
console.log(arrFuncWithReturnType());

// Lambda functions i.e one-liner functions
const lambdaFunc = (name: string) => `Hello ${name}`;
console.log(lambdaFunc("aroona")); 

const sumFunc = (num1: number, num2: number) => num1+num2;
console.log(sumFunc(3,5));

// optional parameter
const optionalParameter = (firstName: string, lastName?: string) => {
    if(lastName){
        console.log("Last Name exists!");
    } else {
        console.log("Last Name doest not exists!")
    }
}
optionalParameter("aroona");
optionalParameter("aroona", "ali");

// default parameters
const defaultParameter = (firstName: string, lastName: string = "akbar") => firstName + " " + lastName;
console.log(defaultParameter("aroona"));
console.log(defaultParameter("aroona", "ali"));


// ---------------------------
// Loops
// let arr = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// let i = 0;
// while (i < arr.length) {
//   console.log(arr[i]);
//   i++;
// }

// for (let i = 0; i < arr.length; i++) {
//   console.log(arr[i] + 10);
// }

// let k = 0;
// do {
//   console.log("Testing");
//   k++;
// } while (k < 0);

// ---------------------------------
/* `Map`, `Filter`, and `Foreach`*/
// const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];

// const arrayMethod = (abc: number, index: number) => {
//   if ((index + abc) % 2 === 0) {
//     return "Even";
//   } else {
//     return "Odd";
//   }
// };

// let mapReturn = arr.map(arrayMethod);
// console.log("🚀 ~ mapReturn:", mapReturn);

// const names = ["Abu Hurairah", "Naveed", "Azhar", "Usman"];

// const namesUpdate = (nam: string, index: number) => {
//   if (nam === "Usman") {
//     return "M. Usman";
//   }
//   return nam;
// };

// const newNames = names.map(namesUpdate);
// console.log("🚀 ~ newNames:", newNames);

// let nums = [-1, 2, 3, -5, 4, -9, 8, -8, -8, -8];

// const customFunction = (val: number) => {
//   if (val < 0) {
//     console.log("Negative");
//     return "Negative";
//   } else {
//     console.log("Positive");
//     return "Positive";
//   }
// };

// const data = nums.map(customFunction);
// console.log("🚀 ~ data:", data);

// const names = [
//   "Ali",
//   "Usman",
//   "Azhar",
//   "Naveed",
//   "Abu Hurairah",
//   "Ramzan",
//   "Rizwan",
//   "Sultan",
//   "Mahad",
//   "Zain",
//   "Imran",
// ];

// const findName = (name: string) => {
//   return name.length;
// };

// const namesLength = names.map((name: string) => {
//   return name.length;
// });
// console.log("🚀 ~ namesLength:", namesLength);

// const nums1 = [1, 2, 3, 4, 5, 6, 7];
// const nums2 = [7, 6, 5, 4, 3, 2, 1];

// const newArr = nums1.map((val: number, index: number) => {
//     return val + nums2[index];
// });
// console.log("🚀 ~ newArr ~ newArr:", newArr);

// ---------------------------------
// Filter

// const nums1 = [1, 2, 3, 4, 5, 6, 7];

// const filteredArr = nums1.filter((val: number, index: number) => {
//   if (index < 2) {
//     return true;
//   }
// });
// console.log("🚀 ~ filteredArr ~ filteredArr:", filteredArr);

const names = [
  "Ali",
  "Usman",
  "Azhar",
  "Naveed",
  "Abu Hurairah",
  "Ramzan",
  "Rizwan",
  "Sultan",
  "Mahad",
  "Zain",
  "Imran",
];

const filteredNames = names.filter((name: string) => {
  if (name !== "Abu Hurairah") {
    return true;
  }
});
console.log("🚀 ~ filteredNames ~ filteredNames:", filteredNames);