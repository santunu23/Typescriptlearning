console.log("Output from Generic type");
//Simple Generic
function echo(data) {
    return data;
}
console.log(echo("Max"));
console.log(echo(27));
console.log(echo({ name: "Max", age: 27 }));
//Better Generic
function betterEcho(data) {
    return data;
}
console.log(betterEcho("Max"));
console.log(betterEcho(27));
console.log(betterEcho({ name: "Max", age: 27 }));
//Build-in Generics
const testResult = [1.94, 2.44];
testResult.push(1);
//Arrays
function printAll(args) {
    args.forEach(e => console.log(e));
}
printAll((["Apple", "Banana"]));
//Generic Types
const echo2 = betterEcho;
console.log(echo2("Something"));
//Generic Class
class SimpleMath {
    calculate() {
        return +this.baseValue * +this.multiplyValue;
    }
}
const simpleMath = new SimpleMath();
simpleMath.baseValue = 10;
simpleMath.multiplyValue = 20;
console.log(simpleMath.calculate());
//Use more than one Generic types
