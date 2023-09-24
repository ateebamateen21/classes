//--------------------------Access Modifiers-----------------------------
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
//---------------"private"----------------
var Person = /** @class */ (function () {
    function Person(name, age, gender) {
        this.name = name;
        this.age = age;
        this.gender = gender;
    }
    // Public method accessible from anywhere
    Person.prototype.introduce = function () {
        return "Hi, I'm ".concat(this.name, ", ").concat(this.age, " years old, and I identify as ").concat(this.gender, ".");
    };
    return Person;
}());
var guest = /** @class */ (function (_super) {
    __extends(guest, _super);
    function guest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    //you can access the protetected and public properties here only.
    guest.prototype.getgift = function () {
        return "Hi, ".concat(this.name, ", you are ligible for this gift as you are ").concat(this.gender, " ");
        //   this.age  (not accessible)
    };
    return guest;
}(Person));
// Create a person object
var person = new Person("Alice", 30, "female");
// Access public properties and methods
console.log(person.name); // Accessing public property
console.log(person.introduce()); // Accessing public method
// Attempt to access private and protected properties (generates errors)
// console.log(person.age); // Error: 'age' is private and cannot be accessed from outside
// console.log(person.gender); // Error: 'gender' is protected and cannot be accessed from outside
var Bike = /** @class */ (function () {
    function Bike(name, model, brand) {
        this.brand = brand;
        this.model = model;
        // this.hasBrakes = hasBrakes;
        this.name = name;
        console.log("This ".concat(this.name, " bike from ").concat(this.brand, " is of ").concat(this.model));
    }
    return Bike;
}());
var CD70 = /** @class */ (function (_super) {
    __extends(CD70, _super);
    function CD70() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return CD70;
}(Bike));
var myBike = new Bike("CD70", 2017, "Honda");
