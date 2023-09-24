//---------------Method OVerRiding--------------------

class Animal {
    makeSound() {
        console.log("Animal makes a generic sound.");
    }
}

class Dog extends Animal {
    makeSound() {
        console.log("Dog barks!"); // Overrides the 'makeSound' method from Animal
    }
}
class Cat extends Animal {
    makeSound() {
        console.log("Cat Meow!"); // Overrides the 'makeSound' method from Animal
    }
}

// const myDog = new Dog();
// myDog.makeSound(); // Calls the overridden 'makeSound' method specific to Dog


let newAnimal = new Dog().makeSound()

let newCat = new Cat().makeSound()