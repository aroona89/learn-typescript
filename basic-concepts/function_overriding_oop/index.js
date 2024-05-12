// function sum(a:number, b: number): number{
//     return a+b;
// }
// function sum(a:number, b: number): number{
//     return a*b;
// }
// Function overriding is a concept in object-oriented programming (OOP) where a subclass 
// provides a specific implementation for a method that is already defined in its superclass. 
// The subclass method has the same name, parameters, and return type as the superclass method, 
// but it can have a different implementation. it allows you to redefine the behavior of inherited methods, 
// particularly useful when a child class needs to specialize or modify the functionality provided by a parent class.
// * Inheritance: You establish a parent-child relationship between classes using the extends keyword. 
// The child class inherits all the properties and methods from the parent class.
// * Redefining Methods: Within the child class, you can define a method with the same name, parameters, 
// and return type as a method in the parent class. This redefinition is what constitutes overriding.
// Key Point: The overridden method must have the same signature (name, parameters, and return type) 
// as the parent class method.
class animal {
    makeSound() {
        console.log("The animal makes a sound");
    }
}
class dog extends animal {
    makeSound() {
        console.log("WOOF!");
    }
}
class cat extends animal {
    makeSound() {
        console.log("MEOW!");
    }
}
var animal_dog = new dog();
animal_dog.makeSound();
var animal_cat = new cat();
animal_cat.makeSound();
export {};
