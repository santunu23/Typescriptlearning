System.register(["./circle.js"], function (exports_1, context_1) {
    "use strict";
    var circle;
    var __moduleName = context_1 && context_1.id;
    return {
        setters: [
            function (circle_1) {
                circle = circle_1;
            }
        ],
        execute: function () {
            console.log(circle.PI);
            console.log(circle.calCircle(2));
        }
    };
});
