"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// optional parameter
const optionalParameter = (firstName, lastName) => {
    if (lastName) {
        console.log("Last Name exists!");
    }
    else {
        console.log("Last Name doest not exists!");
    }
};
optionalParameter("aroona");
optionalParameter("aroona", "ali");
// default parameters
const defaultParameter = (firstName, lastName = "akbar") => firstName + " " + lastName;
console.log(defaultParameter("aroona"));
console.log(defaultParameter("aroona", "ali"));
// rest parameters
function printItems(...items) {
    items.forEach(item => console.log(item));
}
printItems('apple', 'banana', 'cherry');
