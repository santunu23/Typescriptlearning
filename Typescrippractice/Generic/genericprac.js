//How simple function is use
function echoi(data) {
    return data;
}
console.log(echoi("Max").length);
console.log(echoi(7).length);
console.log(echoi({ name: "Joy", age: 23 }));
//Generic types 
function BetterEcho(data) {
    return data;
}
console.log(BetterEcho("Joy").length);
console.log(BetterEcho(7));
const testRes = [1, 2];
console.log(testRes);
testRes.push(-2.99);
console.log(testRes);
function printAlll(args) {
    args.forEach((e) => {
        console.log(e);
    });
}
printAlll(["Apple", "Banana"]);
//Generic types 
const echo3 = echo;
