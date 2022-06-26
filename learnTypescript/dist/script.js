"use strict";
let a = 2;
console.log(a);
//Tuple 
let person = [1, 'Brand', true];
//Truple array
let employee;
employee = [
    [1, 'Brad'],
    [2, 'John'],
    [3, 'Jill']
];
//Type union
let pid = 22;
pid = "Joy";
//Enum
var Direction1;
(function (Direction1) {
    Direction1[Direction1["Up"] = 0] = "Up";
    Direction1[Direction1["Down"] = 1] = "Down";
    Direction1[Direction1["Left"] = 2] = "Left";
    Direction1[Direction1["Right"] = 3] = "Right";
})(Direction1 || (Direction1 = {}));
console.log(Direction1.Up);
//Type Assertion 
let cid = 1;
let customerId = cid;
const user1 = {
    id: 1,
    name: 'John '
};
const add = (x, y) => x + y;
const sub = (x, y) => x - y;
class Person {
    constructor(id, name) {
        this.id = id,
            this.name = name;
    }
    register() {
        return `${this.name} is now registered.`;
    }
}
const brad = new Person(1, 'Joy');
const mark = new Person(2, 'Sen');
// console.log(brad,mark);
// console.log(brad.register());
//Subclass
class Employee extends Person {
    constructor(id, name, position) {
        super(id, name);
        this.position = position;
    }
}
// const emp=new Employee(3,'Shawn','Developer')
// console.log(emp.register())
//Generics
// In a nutshell, generics enable types (classes and interfaces) to be parameters when defining 
// classes, interfaces and methods. Much like the more familiar formal parameters used 
// in method declarations, type parameters provide a way for you to re-use the same code 
// with different inputs. The difference is that the inputs to formal parameters are values,
// while the inputs to type parameters are types.
function getArray(items) {
    return new Array().concat(items);
}
let numArray = getArray([1, 2, 3, 4, 5]);
let strArray = getArray(['brad', 'John', 'Jill']);
numArray.push(1);
