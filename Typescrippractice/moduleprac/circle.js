System.register([], function (exports_1, context_1) {
    "use strict";
    var PI;
    var __moduleName = context_1 && context_1.id;
    function calCircle(daimeter) {
        return daimeter * PI;
    }
    exports_1("calCircle", calCircle);
    return {
        setters: [],
        execute: function () {
            exports_1("PI", PI = 3.14);
        }
    };
});
