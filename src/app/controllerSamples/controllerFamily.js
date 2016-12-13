/**
 * Created by rajmahad on 12/12/2016.
 */
/**
 * Scope Inheritance Sample controllers
 */
(function () {
    "use strict";
    angular.module("training.angularjs.controllerSamples.controllerFamily", [])
    /**
     * Parent Controller for Controller Samples.
     */
        .controller("ControllerSamplesParentController", ["$scope", "$log",
            function ($scope, $log) {
                var me = this;

                // Primitive fields on scope
                me.firstName = "Rajesh";
                me.lastName = "Mahadevaiyer";

                // Object field on scope
                me.name = {
                    firstName: "Rajesh",
                    lastName: "Mahadevaiyer"
                };

                $log.debug("Invoking ControllerSamplesParentController");
            }
        ])
        /**
         * Child Controller for Controller Samples.
         */
        .controller("ControllerSamplesChildController", ["$scope", "$log",
            function ($scope, $log) {
                $log.debug("Invoking ControllerSamplesChildController");

                // Object field on scope
                // $scope.name = {
                //     firstName: "Sareen",
                //     lastName: "Koduru"
                // };
            }
        ]);
}());
