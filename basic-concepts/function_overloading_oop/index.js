// function sum(a:number, b: number): number{
//     return a+b
// }
// function sum(a:string): string{
//     return a
// }
// console.log(sum(4,2));
// console.log(sum("hello"));
// Function overloading allows you to define multiple function signatures with the same 
// name but different argument types and return types. This enables a single function to 
// exhibit different behaviors based on the arguments used when calling it.
// Multiple Signatures: You can define several function signatures for the same function name. 
// Each signature specifies the expected parameter types and the return type.
class calculator {
    sum(a, b) {
        return a + b;
    }
    sum(x, y, z) {
        return x + y + z;
    }
}
var addObject = new calculator();
console.log(addObject.sum(3, 6, 7));
export {};
