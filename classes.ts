//---------------------CLASSES-----------------------

//-------Class Declaration and creating its object---------

/*
 class Car {
   // Class members(functions, variables, constrcutor) will go here
 }
 let myCar = new Car();
 */


//----------Constructor----------
/*
class Car {
    constructor() {
        console.log("This is my car object");
    }
}
let myCar = new Car();
*/
//constructor is automatically called when an object of a class is created.


//----------Properties-----------

/*
class Car {
    speed: number;
    model: number;

    constructor(initialSpeed: number, carModel: number) {
        this.speed = initialSpeed;
        this.model = carModel;
    }
}
//(45,2017)
const myCar = new Car(100, 2017);

class Student {
    name:string;
    age:number;
    isPresent: boolean;
    marks(){

    }
}




//-----------Prototype Methods-----------

/*
class Calculator {
    add(a: number, b: number): number {
        return a + b;
    }

    subtract(a: number, b: number): number {
        return a - b;
    }
}
let myCal1 = new Calculator().add(4,6);
let myCal2 = new Calculator().subtract(4,6);
*/


//---------------Static Methods-----------------
/*
class Human {
    constructor() { } //called automatically when an object is created of this class.
    callMe() { } //not called until you call them. Can be called on instance level.
    static trollMe() { } //can be called even without calling the object. Can be called only on class level.

}


class Car {
    static totalCars: number = 0; // Class-level property

    constructor(public make: string, public model: string) {
        Car.totalCars++; // Increment the totalCars count for all instances
    }

    getFullDescription(): string {
        return `${this.make} ${this.model}`; // Instance-level method accessing instance-specific data
    }
}

const car1 = new Car("Toyota", "Camry"); // Create an instance
const car2 = new Car("Honda", "Civic");  // Create another instance

/*
car1={
    constructor(public make: string, public model: string) {
        Car.totalCars++; // Increment the totalCars count for all instances
    }

    getFullDescription(): string {
        return `${this.make} ${this.model}`; // Instance-level method accessing instance-specific data
    }
}


console.log(Car.totalCars); // Access class-level property (shared among all instances)
// car1.totalCars //not accessible on instances
console.log(car1.getFullDescription()); // Call instance-level method on car1
console.log(car2.getFullDescription()); // Call instance-level method on car2
*/



//------------------instanceof Operator------------------
/*
class Animal {}

class Dog extends Animal {}

class Cat extends Animal {}

// Create instances of Dog and Cat
const dog_obj = new Dog();
const cat_obj = new Cat();

// Check if objects are instances of specific classes
const isDog = cat_obj instanceof Dog;
console.log(isDog); //false

const isCat = cat_obj instanceof Cat;
console.log(isCat); //true

// Check for inheritance
const isAnimal = dog_obj instanceof Animal;
console.log(isAnimal); //true
 // true, 'dog' is also an instance of 'Animal'
*/






