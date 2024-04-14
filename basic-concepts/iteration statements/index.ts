// iteration statements or looping constructs


// while loop
var loopNum: number = 1; // variable initialization
console.log("Table of 2");
while(loopNum <=10){ // condition checking
    let result: number = 2 * loopNum; // 2,4,6,8,10,12,14,16,18,20 
    console.log(`2*${loopNum}=${result}`);
    ++loopNum; // pre-increment operator (increment, decrement)
}
console.log("END loop");


// for loop
// initialization, condtion checking, increment or decrement in one line using semicolon (seperator)
for (let index = 10; index >=1 ; --index) {
    console.log(index);   
}
/* Note: firstly it will initailize the variable, secondly will check the condition, if true  loop body executes 
means run the code written in {} i.e execution of code block and then do increment or decrement (prefix, postfix) */

// do while loop
let num: number = 1;
do {
    console.log("do while loop", num);
    ++num;
} while(num<=10)

// use-cases

/* write a typescript program that calculates the sum of even numbers from 1 to 100
and make the list of all even numbers to print along with the sum. */

let sumEven = 0;
let evenNumbersList: number[] = [];
for (let index = 1; index <= 100; index++) {
    if (index % 2 == 0){
        evenNumbersList.push(index);
        sumEven = sumEven + index;
    }
} 
console.log("list of even numbers:", evenNumbersList);
console.log("sum of even numbers:", sumEven);

/* write a typescript program that calculates the sum of odd numbers from 1 to 100
and make the list of all even numbers to print along with the sum. */

let sumOdd = 0;
let oddNumbersList: number[] = [];
for (let index = 1; index <= 100; index++) {
    if (index % 2 != 0){
        oddNumbersList.push(index);
        sumOdd = sumOdd + index;
    }
} 
console.log("list of odd numbers:", oddNumbersList);
console.log("sum of odd numbers:", sumOdd);