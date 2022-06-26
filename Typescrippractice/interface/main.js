// interface NamedPerson{
//     firstName:string;
//     age?:number;
//     [propName:string]:any;
//     greet(lastName:string):void;
// } 
// function greeting(person:NamedPerson){
//     console.log("hello "+person.firstName)
// }
// function changeName(person:NamedPerson){
//     person.firstName="Ana";
//     return person.firstName;
// }
// const personing:NamedPerson={
//     firstName:"Max",
//     age:27,
//     hobbies:["Cooking","Sports"],
//     greet(lastName:string){
//         console.log("Hi, I am "+this.firstName + " " +lastName);
//     }
// }
const personi = {
    firstname: "Joy",
    hobbies: ["Cooking", "sports"],
    greet(lastn) {
        return lastn;
    }
};
function greeti(personi) {
    console.log(personi.firstname + " " + personi.hobbies + " " + personi.greet("Sen"));
}
greeti(personi);
class Parson {
    greet(lastn) {
        console.log("Hi I am " + this.firstname + " " + lastn);
    }
}
const myPerson = new Parson();
myPerson.firstname = "Susmi";
myPerson.greet("Sengupta");
let doublefunction;
doublefunction = function (val1, val2) {
    return (val1 + val2) * 2;
};
console.log(doublefunction(10, 20));
const ePerson = {
    age: 28,
    firstname: "Kalam",
    greet(lastn) {
        console.log(lastn);
    }
};
console.log(ePerson);
