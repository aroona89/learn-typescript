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