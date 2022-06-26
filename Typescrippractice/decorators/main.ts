function logged(constructorFn:Function){
    console.log(constructorFn);
}

@logged
class PersonDe{
    constructor(){
        console.log("Hi");
    }
}

//Factory
function logging(value:boolean){
    return value?logged:null;
}
@logging(true)
class Bicycle{

}