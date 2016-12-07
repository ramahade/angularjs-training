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
        ])
        /**
         * Controller for Binding Samples.
         */
        .controller("BindingSamplesController", ["$scope", "$timeout", "$log",
            function ($scope, $timeout, $log) {
                var me = this;

                var timeoutPromise = $timeout(populateModel, 3000);
                $scope.$on("$destroy", cleanUp);

                /**
                 * Populate the model with a greeting
                 */
                function populateModel(){
                    $log.info("populating model");
                    me.greeting = "Hello Folks!";
                }

                /**
                 * Cleans up any timeouts or listeners left behind
                 */
                function cleanUp(){
                    $log.info("cleanup");
                    $timeout.cancel(timeoutPromise);
                }
            }
        ]);
}());
