"use strict";
// prefix ++a, --a
// pre-increment ++a
// pre-decrement --a
Object.defineProperty(exports, "__esModule", { value: true });
// postfix a++, a--
// post-increment a++
// post-decrement a--
var index = 1;
var result = index++;
console.log("index:", index);
console.log("result:", result);
var index = 1;
var result = ++index;
console.log("index:", index);
console.log("result:", result);
var index = 1;
var result = index--;
console.log("index:", index);
console.log("result:", result);
var index = 1;
var result = --index;
console.log("index:", index);
console.log("result:", result);
