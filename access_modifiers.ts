//--------------------------Access Modifiers-----------------------------


//---------------"private"----------------
/*
class Person {
    // Public property accessible from anywhere and by default
    public name: string;

    // Private property accessible only within the class
    private age: number;

    // Protected property accessible within the class and subclasses
    protected gender: string;

    constructor(name: string, age: number, gender: string) {
        this.name = name;
        this.age = age;
        this.gender = gender;
    }

    // Public method accessible from anywhere
    public introduce(): string {
        return `Hi, I'm ${this.name}, ${this.age} years old, and I identify as ${this.gender}.`;
    }
}

class guest extends Person{
//you can access the protetected and public properties here only.

getgift():string{
      return `Hi, ${this.name}, you are ligible for this gift as you are ${this.gender} `
    //   this.age  (not accessible)
}
}


// Create a person object
const person = new Person("Alice", 30, "female");

// Access public properties and methods
console.log(person.name); // Accessing public property
console.log(person.introduce()); // Accessing public method

// Attempt to access private and protected properties (generates errors)
// console.log(person.age); // Error: 'age' is private and cannot be accessed from outside
// console.log(person.gender); // Error: 'gender' is protected and cannot be accessed from outside

*/




class Bike{
   private name: string; //only inside
    protected model:number; //inside class and subclasses
    public brand: string; //everywhere
   
    constructor(name:string,model:number,brand:string){
        this.brand = brand;
        this.model = model;
        // this.hasBrakes = hasBrakes;
        this.name = name;

        console.log(`This ${this.name} bike from ${this.brand} is of ${this.model}`)
    }
}


class CD70 extends Bike{
    funcbike(){
        // console.log(`${this.name}`) //CAN'T BE ACCESSED HERE, (PRIVATE)
    }

}

// let myBike = new Bike("CD70",2017,"Honda").name //CAN'T BE ACCESSED (PRIVATE)
// let myBike = new Bike("CD70",2017,"Honda").model //CAN'T BE ACCESSED (PROTECTED)
// let myBike = new Bike("CD70",2017,"Honda").brand //CAN BE ACCESSED (PUBLIC)