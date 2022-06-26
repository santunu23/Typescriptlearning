interface NamedPerson{
    firstname:string;
    age?:number;
    greet(lastname:string):void;
}

const addperson:NamedPerson={
    firstname:"Max",
    greet(lastname:string){
            console.log("Hi, I am  "+this.firstName+" "+lastname);
    }
}

interface AgedPerson extends NamedPerson{
    age?:number;
}

const olPer:AgedPerson={
    firstname:"Joy",
    greet(lastname) {
        console.log("This is lastname "+lastname)
    }
}



addperson.greet("Sen");
function great(addperson:NamedPerson) {
    console.log("Hello, "+ addperson.firstname);
}
great(addperson);

//Function types 
interface DoublevalueFunc{
(num1:number,num2:number):number;
}
let myDFunc:DoublevalueFunc;
myDFunc=function(n1:number,n2:number){
    return (n1*n2)*2;
}
console.log(myDFunc(10,20)); 