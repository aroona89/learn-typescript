"use strict";
// entity (properties, actions)
// key-value pair
Object.defineProperty(exports, "__esModule", { value: true });
var carList = [
    {
        company: "honda",
        releaseYear: 2024,
    },
    {
        company: "toyota ",
        releaseYear: 2020,
    },
];
for (const i of carList) {
    console.log(i);
    console.log(i.company, i.releaseYear);
}
