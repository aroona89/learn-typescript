/* Q#20
Think of something you could store in a array. For example, you could make a list of mountains, 
rivers, countries, cities, languages, or anything else you’d like. Write a program that creates
a list containing these items. */

// Array to store mountain names
var mountainList: string[] = [ 
    "Mount Everest", 
    "K2"
];
// Print the mountain list
console.log("\nMountain List:");
mountainList.forEach(mountain => console.log(mountain));

// Array to store river names
let rivers: string[] = ["Indus", "Ganges"];
// Print the river list
console.log("\nRiver List:");
rivers.forEach(river => console.log(river));

// Array to store country names
let countries: string[] = ["Pakistan", "India"];
// Print the country list
console.log("\nCountry List:");
countries.forEach(country => console.log(country));

// Array to store city names
let cities: string[] = ["Islamabad", "Mumbai"];
// Print the city list
console.log("\nCity List:");
cities.forEach(city => console.log(city));

// Array to store language names
let languages: string[] = ["English", "Urdu"];
// Print the language list
console.log("\nLanguage List:");
languages.forEach(language => console.log(language));

/* Q#21
They think of something you could store in a TypeScript Object. 
Write a program that creates Objects containing these items. */

// Example#1
interface Tourist {
    name: string;
    mountain: string;
    river: string;
    country: string;
    city: string;
    language: string;
  }

var tourists: Tourist[] = [
    {
        name: "Aroona ALi",
        mountain: "Mount Everest",
        river: "Indus",
        country: "Pakistan",
        city: "Islamabad",
        language: "Urdu"
    },
    {
        name: "Fatima Tariq",
        mountain: "K2",
        river: "Ganges",
        country: "India",
        city: "Mumbai",
        language: "English"
    }
];
// Print information about each tourist
console.log("\nInformation about Tourists:");
tourists.forEach(tourist => {
    console.log(`${tourist.name} lives in ${tourist.city} which is located in ${tourist.country},\nshe has climed ${tourist.mountain}, swimmed in ${tourist.river} and speaks a ${tourist.language} language.\n`);
});

// Example#2
// Define an array of city objects
var citiesName = [
    { name: "Islamabad", country: "Pakistan", population: 1.11 },
    { name: "Mumbai", country: "India", population: 12.48 },
];
console.log(typeof citiesName); // data type
// Print information about each city
console.log("\nInformation about Cities:");
citiesName.forEach(city => {
    console.log(`${city.name} is located in ${city.country} and has a population of ${city.population} million.`);
});