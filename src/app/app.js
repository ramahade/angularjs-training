/**
 * Application module - Everything starts here
 */
(function () {
    "use strict";
    angular.module("training.angularjs", [
        "templates-app",
        "templates-common",
        "training.angularjs.calculator",
        "training.angularjs.controllerSamples",
        "training.angularjs.exercise01",
        "training.angularjs.watcherSamples",
        "ui.router",
        "ui.bootstrap"
    ])
        /**
         * An application level controller for holding any application level API
         */
        .controller("AppController", ["$scope", function ($scope) {

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
                function populateModel() {
                    $log.debug("populating model");
                    me.greeting = "Hello Folks!";
                }

                /**
                 * Cleans up any timeouts or listeners left behind
                 */
                function cleanUp() {
                    $log.debug("cleanup");
                    $timeout.cancel(timeoutPromise);
                }
            }
        ]);
}());
