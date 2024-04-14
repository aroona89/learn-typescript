// entity (properties, actions)
// key-value pair

// var car = {
//     color: "white",
//     company: "honda",
//     releaseYear: 2024,
//     usedCar: false,
//     run: (a:number, b: number) => {
//         return a+b
//     }
// }
// console.log(car.color, car.releaseYear, car.run(1,2));

// list of objects
// var city = [
//     {
//         name: "Faisalabad"
//     },
//     {
//         name: "Islamabad"
//     },
//     {
//         name: "Murree"
//     }
// ]

// console.log(city[0]); // access object at index 0 of list
// console.log(city[0].name); // access property of an object present at index 0

// for (const iterator of city) {
//     console.log(iterator) // access objects stored as elements in the array
//     console.log(iterator.name) // access properties of objects

// }

// define object types

// method-1
// var book: { genre: string; read: boolean } = {
//   genre: "fiction",
//   read: false,
// };
// console.log(book.genre);

// method-2
// defining custom type
// type bookType = {
//   genre: string;
//   read: boolean;
// };

// var book: bookType = {
//   genre: "fiction",
//   read: false,
// };
// console.log(book.genre);

// type carType = {company: string; releaseYear?: number, usedCar: boolean} // ? optional variable
// var cars: carType[] = [
//   {
//     company: "honda",
//     releaseYear: 2024,
//     usedCar: false,
//   },
//   {
//     company: "toyota ",
//     usedCar: true,
//   },
// ];
// console.log(cars[1]);

/* write a TypeScript program that prints all Car's company and release year from the list,
make sure that car is an object */

type carType = { company: string; releaseYear: number };
var carList: carType[] = [
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
