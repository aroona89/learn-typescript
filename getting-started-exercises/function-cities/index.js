"use strict";
/* Q#38
Cities: Write a function called describe_city() that accepts the name of a city and its country.
The function should print a simple sentence, such as Karachi is in Pakistan.
Give the parameter for the country a default value. */
Object.defineProperty(exports, "__esModule", { value: true });
function describe_city(city, country = "Pakistan") {
    console.log(`${city} is in ${country}`);
}
// Call your function for three different cities, at least one of which is not in the default country. 
describe_city("faisalabad");
describe_city("lahore");
describe_city("New York", "US");
/* Q#39
City Names: Write a function called city_country() that takes in the name of a city and its country.
The function should return a string formatted like this:
"Lahore, Pakistan" */
function city_country(city, country) {
    const formattedString = `"${city}, ${country}"`;
    return formattedString;
}
// Call your function with at least three city-country pairs, and print the value that’s returned. 
let result1 = city_country("Lahore", "Pakistan");
console.log(result1);
let result2 = city_country("New York", "US");
console.log(result2);
let result3 = city_country("Mumbai", "India");
console.log(result3);
// method-2 using ARROW FUNCTION (ANONYMOUS FUNCTION)
// let cityCountry = (city:string, country: string) => `"${city}, ${country}"`
// let result4: string = cityCountry("Lahore", "Pakistan")
// console.log(result4);
// let result5: string = cityCountry("New York", "US")
// console.log(result5);
// let result6: string = cityCountry("Mumbai", "India")
// console.log(result6);
