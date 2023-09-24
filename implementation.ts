//----------Interface with Classes------------

// Define an interface called Shape
interface Shape {
    name: string; // Property
    area(a:number,b:number): number; // Method
}

class Circle implements Shape {
    constructor(public name: string, public radius: number) {}

    area(): number {
        return Math.PI * this.radius ** 2;
    }
}

class Rectangle implements Shape {
    constructor(public name: string, public width: number, public height: number) {}

    area(): number {
        return this.width * this.height;
    }
}

// Now, both Circle and Rectangle adhere to the Shape interface contract
const circle = new Circle("Circle", 5);
const rectangle = new Rectangle("Rectangle", 4,6);

console.log(circle.area()); // Calculate and print the area of the circle
console.log(rectangle.area()); // Calculate and print the area of the rectangle
