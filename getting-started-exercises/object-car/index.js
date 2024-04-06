"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/* Q#45
Cars: Write a function that stores information about a car in a Object.
The function should always receive a manufacturer and a model name.
It should then accept an arbitrary number of keyword arguments.
Call the function with the required information and two other name-value pairs,
such as a color or an optional feature.
Print the Object that’s returned to make sure all the information was stored correctly. */
function createCar(manufacturer, model, ...optional) {
    const car = {
        manufacturerKey: manufacturer,
        modelKey: model
    };
    // Loop through the extras array and add each extra property to the car object
    optional.forEach(([key, value]) => {
        car[key] = value;
    });
    return car;
}
const carInfo = createCar("Honda", "Civic", ['color', 'blue'], ['year', 2022]);
// Print the returned object
console.log(carInfo);
// console.log(typeof carInfo);
