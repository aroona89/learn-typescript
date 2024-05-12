// function sum(a:number, b: number): number{
//     return a+b;
// }

// function sum(a:number, b: number): number{
//     return a*b;
// }

// console.log(sum(2,4)); TypeScript enforces type safety



class animal{
    makeSound(): void{
        console.log("The animal makes a sound")
    }
}

class dog extends animal {
    makeSound(): void {
        console.log("WOOF!")
    }
}

class cat extends animal {
    makeSound(): void {
        console.log("MEOW!")
    }
}

var animal_dog = new dog();
animal_dog.makeSound();
var animal_cat = new cat();
animal_cat.makeSound();