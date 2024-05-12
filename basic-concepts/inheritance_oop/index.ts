class parent{
    fatherName: string = "Akbar";
}
class child extends parent{
    firstName: string = "Aroona";
}
var childObject = new child()
console.log(childObject.fatherName);


// function overriding, super() method
class Area {
    length: number;
    width: number;

    constructor(length:number, width:number){
        this.length = length;
        this.width = width;
    }

    calculate(): void{
        console.log(this.length * this.width);
    }
}
class Volume extends Area {
    height: number;
    constructor(heigth:number, length:number, width: number){
        super(length, width)
        this.height = heigth;
    }
    
    calculate(): void {
        super.calculate();
        console.log(this.height * this.length * this.width);
    }
}

var volume = new Volume(3,5,2)
volume.calculate()


