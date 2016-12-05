/**
 * Application module - Everything starts here
 */
(function () {
    "use strict";
    angular.module("training.angularjs", [
        "templates-app",
        "templates-common",
        "training.angularjs.calculator",
        "ui.router",
        "ui.bootstrap"
    ]).controller("AppController", ["$scope", function ($scope) {

    }])
    /**
     * Controller for calculator widget.
     */
        .controller("CalculatorController", [
            function () {
                var me = this;
                me.left = me.right = me.result = null;
                me.operator = "+";
                me.calculate = calculate;
                me.calculatedResult = calculatedResult;

                function calculate() {
                    me.result = null;
                    if (!me.left || !me.right) {
                        return;
                    }
                    switch (me.operator) {
                        case "+":
                            me.result = parseInt(me.left) + parseInt(me.right);
                            break;
                        case "-":
                            me.result = parseInt(me.left) - parseInt(me.right);
                            break;
                        case "*":
                            me.result = parseInt(me.left) * parseInt(me.right);
                            break;
                        case "/":
                            me.result = parseInt(me.left) / parseInt(me.right);
                            break;
                    }
                }

                function calculatedResult() {
                    calculate();
                    return me.result;
                }
            }
        ]);
}());
