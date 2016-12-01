/**
 * Application module - Everything starts here
 */
(function () {
    "use strict";
    angular.module("training.exercise", [
            "templates-app",
            "templates-common",
            "ui.router",
            "ui.bootstrap"
        ])
        .controller("appController", [
            "$scope",
            "$injector",
            function($scope, $injector){

	    }
        ]);
})();
