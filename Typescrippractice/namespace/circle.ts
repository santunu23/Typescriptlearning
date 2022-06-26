namespace Mycircle{
    const PI=3.14;
    export namespace Human{
        export function calCircle(daimeter:number){
            return daimeter*PI;
        }
    }

}
console.log(Mycircle.Human.calCircle(2));

namespace MyMath{
    const PI=3.14;
    export  function calculateCicumference(diameter:number){
        return diameter*PI;
    }
    export function calculateRectangl(width:number,length:number){
        return width*length;
    }
}

console.log(MyMath.calculateCicumference(10));
console.log(MyMath.calculateRectangl(10,20));