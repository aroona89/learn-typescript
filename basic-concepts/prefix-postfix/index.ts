// prefix ++a, --a
// pre-increment ++a
// pre-decrement --a

// postfix a++, a--
// post-increment a++
// post-decrement a--

var index: number = 1;
var result: number = index++; 
console.log("index:", index); // 2
console.log("result:", result); // 1 

var index: number = 1;
var result: number = ++index; 
console.log("index:", index); // 2
console.log("result:", result); // 2

var index: number = 1;
var result: number = index--; 
console.log("index:", index); // 0
console.log("result:", result); // 1

var index: number = 1;
var result: number = --index; 
console.log("index:", index); //0
console.log("result:", result); //0