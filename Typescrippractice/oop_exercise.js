// Exercise 1 - Class
class Car {
    constructor(name) {
        this.acceleration = 0;
        this.name = name;
    }
    honk() {
        console.log("Toooooooot!");
    }
    accelerate(speed) {
        this.acceleration = this.acceleration + speed;
    }
}
const car = new Car("BMW");
car.honk();
console.log(car.acceleration);
car.accelerate(20);
console.log(car.acceleration);
// Exercise 2 - Inheritance
class BaseObject {
    constructor() {
        this.width = 0;
        this.length = 0;
    }
}
class Rectangle extends BaseObject {
    calcSize() {
        return this.width * this.length;
    }
}
const rectangle = new Rectangle();
rectangle.width = 5;
rectangle.length = 10;
console.log(rectangle.calcSize());
// Exercise 3 - Getters & Setters
class Person {
    constructor() {
        this._firstName = "";
    }
    get firstName() {
        return this._firstName;
    }
    set firstName(value) {
        if (value.length > 3) {
            this._firstName = value;
        }
        else {
            this._firstName = "";
        }
    }
}
const person = new Person();
console.log(person.firstName);
person.firstName = "Ma";
console.log(person.firstName);
person.firstName = "Maximilian";
console.log(person.firstName);
