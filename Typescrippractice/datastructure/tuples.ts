let address:[string,number]=["Super",20];
console.log(address);

let strData:{name:string,age:number}={
    name:"Max",
    age:27
}
console.log(strData);
strData:{}
console.log(strData);
let complex: {data:number[],output:(all:boolean)=>number[] }={
    data:[100,200,100],
    output: function(all:boolean):number[]{
        return this.data
    }
}
console.log(complex);

//union types
let myrealnumber:number|string=  27
myrealnumber="27"