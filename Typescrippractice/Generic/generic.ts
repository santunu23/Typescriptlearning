console.log("Output from Generic type");
//Simple Generic
function echo(data:any){
    return data;
}
console.log(echo("Max"));
console.log(echo(27));
console.log(echo({name:"Max",age:27}));
//Better Generic
function betterEcho<T>(data:T){
    return data;
}

console.log(betterEcho("Max"));
console.log(betterEcho<number>(27));
console.log(betterEcho({name:"Max",age:27}));

//Build-in Generics
const testResult:Array<number>=[1.94,2.44];
testResult.push(1)
//Arrays
function printAll<T>(args:T[]){
    args.forEach(e=>console.log(e));
}
printAll<string>((["Apple","Banana"]));

//Generic Types
const echo2: <T>(data:T) =>T=betterEcho;
console.log(echo2<string>("Something"));

//Generic Class
class SimpleMath<T>{
    baseValue !: T;
    multiplyValue !: T;
    calculate():number{
        return +this.baseValue*+this.multiplyValue
    }
}
const simpleMath=new SimpleMath();
simpleMath.baseValue=10;
simpleMath.multiplyValue=20;
console.log(simpleMath.calculate());

//Use more than one Generic types
