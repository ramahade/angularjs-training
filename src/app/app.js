/**
 * Application module - Everything starts here
 */
(function () {
    "use strict";
    angular.module("training.angularjs", [
            "templates-app",
            "templates-common",
            "ui.router",
            "ui.bootstrap"
        ])
        .controller("AppController", [
            "$scope",
            function($scope){

	        }
        ]);
})();
