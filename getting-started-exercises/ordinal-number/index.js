"use strict";
/* Q#33
Ordinal Numbers: Ordinal numbers indicate their position in a array, such as 1st or 2nd.
Most ordinal numbers end in th, except 1, 2, and 3. */
Object.defineProperty(exports, "__esModule", { value: true });
// • Store the numbers 1 through 9 in a array.
let ordinalNumber = [1, 2, 3, 4, 5, 6, 7, 8, 9];
// method-1
// • Loop through the array.
for (let index = 0; index < ordinalNumber.length; index++) {
    const number = ordinalNumber[index];
    let ordinalSuffix;
    /* • Use an if-else chain inside the loop to print the proper ordinal ending for each number.
    Your output should read "1st 2nd 3rd 4th 5th 6th 7th 8th 9th", and each result should be on a separate line. */
    if (number == 1) {
        ordinalSuffix = 'st';
    }
    else if (number == 2) {
        ordinalSuffix = 'nd';
    }
    else if (number == 3) {
        ordinalSuffix = 'rd';
    }
    else {
        ordinalSuffix = 'th';
    }
    console.log(`${number}${ordinalSuffix}`);
}
// method-2
// for (let iterator of ordinalNumber) {
//     if (iterator == 1 ) {
//         console.log(`${iterator}st`)
//     } else if (iterator == 2) {
//         console.log(`${iterator}nd`)
//     } else if (iterator == 3) {
//         console.log(`${iterator}rd`)
//     } else {
//         console.log(`${iterator}th`)
//     }
// }
// method-3
// for (let number of ordinalNumber) {
//     let suffix;
// switch (number) {
//     case 1:
//         suffix = "st";
//         break;
//     case 2:
//         suffix = "nd";
//         break;
//     case 3:
//         suffix = "rd";
//         break;
//     default:
//         suffix = "th";
//         break;
// }
//     console.log(`${number}${suffix}`)
// }
