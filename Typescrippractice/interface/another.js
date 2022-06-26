const addperson = {
    firstname: "Max",
    greet(lastname) {
        console.log("Hi, I am  " + this.firstName + " " + lastname);
    }
};
const olPer = {
    firstname: "Joy",
    greet(lastname) {
        console.log("This is lastname " + lastname);
    }
};
addperson.greet("Sen");
function great(addperson) {
    console.log("Hello, " + addperson.firstname);
}
great(addperson);
let myDFunc;
myDFunc = function (n1, n2) {
    return (n1 * n2) * 2;
};
console.log(myDFunc(10, 20));
