let a=2;
console.log(a);

//Tuple 
let person: [number,string,boolean]=[1,'Brand',true]

//Truple array
let employee: [number,string][]

employee=[
    [1,'Brad'],
    [2,'John'],
    [3,'Jill']
]

//Type union

let pid: string|number= 22
pid="Joy"

//Enum
enum Direction1{
    Up,
    Down,
    Left,
    Right
}

console.log(Direction1.Up);

//Type Assertion 
let cid:any=1
let customerId=cid as number

//Interfaces 
interface UserInterface{
    id:number,
    name:string,
    age?:number 
}
const user1:UserInterface={
    id:1,
    name:'John '
}

//Function interface
interface MathFunc{
    (x:number,y:number):number
}
const add:MathFunc=(x:number,y:number):number=>x+y
const sub:MathFunc=(x:number,y:number):number=>x-y

//Classes
interface PersonInterface{
    id:number,
    name:string,
    register():string
}
class Person implements PersonInterface{
    id:number
    name:string

    constructor(id:number,name:string){
        this.id=id,
        this.name=name
    }
    register(): string {
        return `${this.name} is now registered.`
    }
}

const brad=new Person(1,'Joy')
const mark=new Person(2,'Sen')

// console.log(brad,mark);
// console.log(brad.register());

//Subclass
class Employee extends Person{
    position:string
    constructor(id:number,name:string,position:string){
        super(id,name)
        this.position=position
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

function getArray<T>(items:T[]):T[]{
    return new Array().concat(items)
}

let numArray=getArray([1,2,3,4,5]);
let strArray=getArray(['brad','John','Jill'])

numArray.push(1)

