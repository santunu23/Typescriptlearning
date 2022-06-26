// class Person{
//     name:string;
//    // private type:string;
//     protected age:number=27;
//     constructor(name:string,public username:string){
//         this.name=name;
//     }
//     printAge(){
//         console.log(this.age)
//     }
// }
// const person=new Person("Max","max");
// console.log(person.name,person.username);
// console.log(person.printAge());
// //Inheritance
// class Joy extends Person{
//     constructor(uname:string){
//         //You have to use super keyword to intensiate the
//         //parent class's constructor file.
//         // let aname="Tanmoy";
//         // let ausername="Indrajit" 
//         super("Tanmoy",uname)
//     }
// }
// const max=new Joy("Indrajit");
// console.log(max)

//GETTERS AND SETTERS.
//GETTERS AND SETTERS FUNCTIONS ARE MOSTLY USE FOR DIRECTLY  ACCESS  CLASS PROPERTY.
//Getters and setters are used to protect your data, particularly when creating classes.
// For each instance variable, a getter method returns its value while a setter method sets or updates its value.
// MOSTLY USE FOR VALIDATING DATA(LIKE LOGIN FORM VALIDATION ETC.)
class Plant{
    private _species:string="Default";
    
    public set species  (v : string) {
        if(v.length>3){
            this._species=v
        }else{
            this._species="Karbon"
        }
        this._species = v;
    }
    public get species() : string {
         return  this._species;
    }
}

let plant=new Plant();
console.log(plant.species);
plant.species="Surprise";
console.log(plant.species);

//Static Properties and Methods
// using 'STATIC' keyword we can directly access properties from the class. No need to be the class instentiate.
class Helper{
   static  PI:number=3.14;
   static calcCircumference(diameter:number){
       return this.PI*diameter;
   }
}
console.log(2*Helper.PI);
console.log(Helper.calcCircumference(9))


//Abstract Classes
abstract class Project{
    projectName:string="Default";
    budget:number=10;
    abstract changeName(name:string):void;
    calBudget(){
        return this.budget*2;
    }
}

class ITProject extends Project{
    changeName(name: string): void {
        this.projectName=name;
    }
}
let newPeoject=new ITProject();
console.log(newPeoject);
newPeoject.changeName("Super IT Project");
console.log(newPeoject);