//How simple function is use
function echoi(data:any){
    return data;
}

console.log(echoi("Max").length);
console.log(echoi(7).length);
console.log(echoi({name:"Joy",age:23}));

//Generic types 
function BetterEcho<T>(data:T){
    return data;
}
console.log(BetterEcho("Joy").length);
console.log(BetterEcho(7));

const testRes:Array<number>=[1,2];
console.log(testRes);
testRes.push(-2.99);
console.log(testRes);

function printAlll<T>(args: T[]){
    args.forEach((e)=>{
        console.log(e)
    })
}
printAlll<string>(["Apple","Banana"]);

//Generic types 
const echo3:<T>(data:T)=>T=echo
 