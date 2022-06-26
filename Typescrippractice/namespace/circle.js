var Mycircle;
(function (Mycircle) {
    const PI = 3.14;
    let Human;
    (function (Human) {
        function calCircle(daimeter) {
            return daimeter * PI;
        }
        Human.calCircle = calCircle;
    })(Human = Mycircle.Human || (Mycircle.Human = {}));
})(Mycircle || (Mycircle = {}));
console.log(Mycircle.Human.calCircle(2));
var MyMath;
(function (MyMath) {
    const PI = 3.14;
    function calculateCicumference(diameter) {
        return diameter * PI;
    }
    MyMath.calculateCicumference = calculateCicumference;
    function calculateRectangl(width, length) {
        return width * length;
    }
    MyMath.calculateRectangl = calculateRectangl;
})(MyMath || (MyMath = {}));
console.log(MyMath.calculateCicumference(10));
console.log(MyMath.calculateRectangl(10, 20));
