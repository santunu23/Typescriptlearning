System.register(["./circle"], function (exports_1, context_1) {
    "use strict";
    var circle_1;
    var __moduleName = context_1 && context_1.id;
    return {
        setters: [
            function (circle_1_1) {
                circle_1 = circle_1_1;
            }
        ],
        execute: function () {
            console.log(circle_1.PI);
            console.log(circle_1.calculateCirumcumference);
        }
    };
});
