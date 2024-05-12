class parent {
    fatherName = "Akbar";
}
class child extends parent {
    firstName = "Aroona";
}
var childObject = new child();
console.log(childObject.fatherName);
class Area {
    length;
    width;
    constructor(length, width) {
        this.length = length;
        this.width = width;
    }
    calculate() {
        console.log(this.length * this.width);
    }
}
class Volume extends Area {
    height;
    constructor(heigth, length, width) {
        super(length, width);
        this.height = heigth;
    }
    calculate() {
        super.calculate();
        console.log(this.height * this.length * this.width);
    }
}
var volume = new Volume(3, 5, 2);
volume.calculate();
export {};
// volume.calculateArea()
