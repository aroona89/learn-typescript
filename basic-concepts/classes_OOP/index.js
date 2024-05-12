class student {
    name;
    courseEnrolled;
    fee; // To make class properties immutable, you can use the readonly keyword that control access to the properties.
    // Parameters Are the variables defined in a function or method signature ( declaration )
    /* Constructor is a special method that's called when an object is created, and it's used
    to initialize the object's properties with the values you pass in (arguments). */
    // Single execution: The constructor method runs only once, when the object is created.
    // Initialization: The constructor is responsible for initializing the object's properties and setting its initial state.
    // No return value: The constructor method does not return a value.
    // Called automatically: The constructor is called automatically when an object is created using the new keyword.
    // Only one constructor: A class can have only one constructor method.
    constructor(n, c, f) {
        this.name = n;
        this.courseEnrolled = c;
        this.fee = f;
        // console.log("object is cretaed!")
    }
    start() {
        console.log("happy learing");
        // return "no undefined"
    }
}
// console.log("before object creation!");
var student1 = new student("aroona", "full stack web development", 5000); // new object or instance of a class
// console.log("after object creation!");
console.log(student1.courseEnrolled);
console.log(student1.fee);
console.log(student1.name);
student1.start();
// console.log(student1.start());
var student2 = new student("ali", "AI", 2500); // Arguments Are the actual values passed to a function or method when it's called
console.log(student2.courseEnrolled);
console.log(student2.fee);
console.log(student2.name);
student2.name = "Bilal"; // class properties are mutable by default, meaning they can be changed after the object is created.
console.log(student2.name);
// student2.fee = 15000; ERROR
student2.start();
export {};
// var student3 = student() ERROR
/* By using keyword "new", you try to create a new instance of the Student class,
which will call the constructor and initialize the object. */
