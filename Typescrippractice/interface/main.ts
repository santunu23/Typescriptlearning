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

// //greeting({firstName:"Joy"});
// console.log(changeName(personing));
// personing.greet("Anything");

// //implementation of class 
// class Personi implements NamedPerson{
//     firstName!: string;
//     greet(lastName:string){
//         console.log("Hi, I am "+this.firstName +" "+lastName);
//     }
// }

// const myPerson=new Personi();
// myPerson.firstName="Santunu";
// // greet(myPerson);
// myPerson.greet("Anything");

// //Function Type 
// interface DoubleValueFunc{
//     (number1:number,number2:number):number;
// }

// let myDoubleFunction:DoubleValueFunc;
// myDoubleFunction=function(value1:number,value2:number){
//     return(value1+value2)*2;
// }
// console.log(myDoubleFunction(10,20)); 

// //Interface  Inheritence
// interface AgedPerson extends NamedPerson{
//     age:number
// }

// const oldPerson:AgedPerson={
//     age:27,
//     firstName:"Dhila",
//     greet(lastName:string){
//         console.log("Hello"+ lastName);
//     }
// }

// console.log("Inheritence example of the interface "+oldPerson)



// Practice of Interface.
interface NamePerson{
    firstname:string;
    age ?:number;
    [per:string]:any;
    greet(lastn:string);
}
const personi={
    firstname:"Joy",
    hobbies:["Cooking","sports"],
    greet(lastn:string){
        return lastn;
    }
  
}

function greeti(personi:NamePerson){
    console.log(personi.firstname+" "+personi.hobbies+" "+personi.greet("Sen"));
    
}

greeti(personi);

class Parson implements NamePerson{
    firstname: string;
    greet(lastn:string){
            console.log("Hi I am "+this.firstname+" "+lastn);
    }
}

const myPerson=new Parson();
myPerson.firstname="Susmi";
myPerson.greet("Sengupta");

//Function type 
interface DoublevalueFunc{
    (number1:number,number2:number):number;
}

let doublefunction:DoublevalueFunc;
doublefunction=function(val1:number,val2:number){
    return (val1+val2)*2;
}
console.log(doublefunction(10,20));

//Inheritance of Interface.
interface AgePerson extends NamePerson{
    age:number;
}

const ePerson:AgePerson={
    age:28,
    firstname:"Kalam",
    greet(lastn:string){
        console.log(lastn);
    }
}

console.log(ePerson);
