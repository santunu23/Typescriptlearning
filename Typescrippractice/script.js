// function Greeter(greeting:string){
//     this.greeting=greeting;
// }
// Greeter.prototype.greet=function(){
//     return "Hello, "+this.greeting;
// }
// let greeter=new Greeter("world");
// let button=document.createElement('button');
// button.textContent="Say Hello";
// button.onclick=function(){
//     alert(greeter.greet());
// };
// document.body.appendChild(button);
//Array example
// let hobbies:any[]=[100,200,"Cooking"];
// console.log(hobbies);
//Truple example
// let address:[string,number]=['Joy',2];
// console.log(address);
// let myName="Joy";
// function returnMax():string{
//     return myName;
// }
// console.log(returnMax());
// function sayHello():void{
//     console.log("Hello");
// }
// sayHello();
// //Object
// let userData={
//     name:"Hello",
//     age:27
// }
// console.log(userData)
// //Complex Object
// let complex:{data:number[],output:(all:boolean)=>number[]}={
//     data: [100,3.98,10],
//     output: function(all:boolean): number[]{
//         return this.data;
//     }
// };
// console.log(complex)
// //Costume Object
// type Complex={data:number[],output:(all:boolean)=>number[]};
// let complex2:Complex={
//     data:[100,3.99,10],
//     output:function(all:boolean){
//         return this.data
//     }
// }
// //Union types 
// let myRealage: number|string|boolean=27;
// myRealage="27";
// myRealage=true;
// type BankAccount={money:number,deposite:(val:number)=>void}
// let bankAccount : BankAccount ={
//     money:2000,
//     deposite(value:number){
//         this.money+=value;
//     }
// };
// let myself : {name:string,bankAccount:BankAccount,hobbies: string[]}={
//     name:"Max",
//     bankAccount:bankAccount,
//     hobbies:["Sports","Cooking"]
// };
// myself.bankAccount.deposite(3000)
// console.log(myself)
// type BankAccount={money:number,deposite:(val:number)=>void}
// let bankAccount:BankAccount={
//         money:2000,
//         deposite(value:number){
//             this.money+=value;
//         }
//     };
//     let myself :{name:string,bankAccount:BankAccount,hobbies:string[]}={
//         name:"Max",
//         bankAccount:bankAccount,
//         hobbies:["Sports","Cooking"]
//     };
//     myself.bankAccount.deposite(3000)
//     console.log(myself)
// let anything;
// anything=12;
// console.log(anything);
// function controlMe(isTrue:boolean,somethingElse:boolean){
//     let result:number;
//     if(isTrue){
//         result=12;
//     }
//     result=33;
//     return result;
// }
//REST operator and spread operator.
//Spread Operator- three dots it helps to convert an array into the list.
// let a=[1,2.33,55];
// console.log(Math.max(...a));
// function makeArray(arg1:number, arg2:number){
//     return [arg1,arg2]
// }
// console.log(makeArray(1,2));
//Like spread operator rest operator also uses three dot(...) parameters,to clear the confusion we can simply 
//describe that spread operator mostly uses in build in function like Math.max(), while rest operator uses in custom
//function. The main difference between rest and spread is that the rest operator puts the rest of some specific 
// user-supplied values into a JavaScript array. But the spread syntax expands iterables into individual elements.
//Example of rest operator
// Use rest to enclose the rest of specific user-supplied values into an array:
// function myBio(firstName, lastName, ...otherInfo) { 
//     return otherInfo;
//   }
//   // Invoke myBio function while passing five arguments to its parameters:
//   myBio("Oluwatobi", "Sofela", "CodeSweetly", "Web Developer", "Male");
//  // The invocation above will return:
//   ["CodeSweetly", "Web Developer", "Male"]
//Destructuring
console.log("DESTRUCTURING");
const myHobbies = ["Cooking", "Sports"];
console.log(myHobbies[0], myHobbies[1]);
//Another way of representing the array.
const Hobby1 = myHobbies[0];
const Hobby2 = myHobbies[1];
console.log(Hobby1, Hobby2);
//To represent the code above ES6 has introduce 
//a smart approach which is called the Destructuring.
const myFood = ['Biriani', 'Mutton Bhuna'];
const [hobby1, hobby2] = myFood;
console.log(hobby1, hobby2);
//Destructuring can also apply in object also. 
//Traditional way of  Destructuring an object.
const userData = { userName: "Max", age: 25 };
const uname = userData.userName;
const uage = userData.age;
console.log(uname, uage);
//Destructuring way of  featching data from an object
const { userName, age } = userData;
console.log(userName, age);
