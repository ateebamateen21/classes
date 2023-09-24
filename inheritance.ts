//------------inheritance and super() keyword------------
/*
class Vehicle {
    speed: number;

    constructor(speed: number) {
        this.speed = speed;
        console.log("This is parent constructor being called")
    }
    
    accelerate() {
        console.log(`Accelerating to ${this.speed} km/h`);
    }
}

class Car extends Vehicle {
    brand: string;
    
    constructor(speed: number, brand: string) {
        console.log("This is child constructor being called")
        super(speed); // Calls the parent class constructor
        this.brand = brand;
    }

    honk() {
        console.log(`Honking the horn of my ${this.brand} car!`);
    }
}
let HondaCar = new Car(500, "Honda").accelerate();
// let HondaCar = new Car(500, "Honda").accelerate().honk(); //check this later
*/