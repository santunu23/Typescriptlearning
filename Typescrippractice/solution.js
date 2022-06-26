// Exercise 1
// var double = function(value:number) {
//     return value * 2;
// };
// console.log(double(10));
let double = (value) => value * 2;
console.log(double(10));
// Exercise 2 - Default Params.
// var greet = function (name:string) {
//     if (name === undefined) { name = "Max"; }
//     console.log("Hello, " + name);
// };
// greet();
// greet("Anna");
const greet = (name = "Max") => {
    console.log("Hello " + name);
};
greet();
greet("Anna");
// Exercise 3
// var numbers = [-3, 33, 38, 5];
// console.log(Math.min.apply(Math, numbers));
const numbers = [-3, 33, 38, 5];
console.log(Math.min(...numbers));
// Exercise 4
// var newArray = [55, 20];
// Array.prototype.push.apply(newArray, numbers);
// console.log(newArray);
const newArray = [55, 20];
newArray.push(...numbers);
console.log(newArray);
// Exercise 5
// var testResults = [3.89, 2.99, 1.38];
// var result1 = testResults[0];
// var result2 = testResults[1];
// var result3 = testResults[2];
// console.log(result1, result2, result3);
const testResults = [3.89, 2.99, 1.38];
const [result1, result2, result3] = testResults;
console.log([result1, result2, result3]);
// Exercise 6
const scientist = { firstName: "Will", experience: 12 };
// var firstName = scientist.firstName;
// var experience = scientist.experience;
// console.log(firstName, experience);
const { firstName, experience } = scientist;
console.log(firstName, experience);
