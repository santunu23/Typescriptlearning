System.register([], function (exports_1, context_1) {
    "use strict";
    var PI;
    var __moduleName = context_1 && context_1.id;
    function calculateCirumcumference(diameter) {
        return diameter * PI;
    }
    exports_1("calculateCirumcumference", calculateCirumcumference);
    return {
        setters: [],
        execute: function () {
            exports_1("PI", PI = 3.14);
        }
    };
});
