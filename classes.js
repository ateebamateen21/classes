//---------------------CLASSES-----------------------
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
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
var Car = /** @class */ (function () {
    function Car(initialSpeed, carModel) {
        this.speed = initialSpeed;
        this.model = carModel;
    }
    return Car;
}());
//(45,2017)
var myCar = new Car(100, 2017);
var Student = /** @class */ (function () {
    function Student() {
    }
    Student.prototype.marks = function () {
    };
    return Student;
}());
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
var Animal = /** @class */ (function () {
    function Animal() {
    }
    return Animal;
}());
var Dog = /** @class */ (function (_super) {
    __extends(Dog, _super);
    function Dog() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return Dog;
}(Animal));
var Cat = /** @class */ (function (_super) {
    __extends(Cat, _super);
    function Cat() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return Cat;
}(Animal));
// Create instances of Dog and Cat
var dog_obj = new Dog();
var cat_obj = new Cat();
// Check if objects are instances of specific classes
var isDog = cat_obj instanceof Dog;
console.log(isDog); //true
var isCat = cat_obj instanceof Cat;
console.log(isCat); //true
// Check for inheritance
var isAnimal = dog_obj instanceof Animal;
console.log(isAnimal); //true
// true, 'dog' is also an instance of 'Animal'
