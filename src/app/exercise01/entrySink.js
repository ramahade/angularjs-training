/**
 * Created by rajmahad on 12/13/2016.
 */
(function () {
    'use strict';

    angular
        .module('training.angularjs.exercise01.entrySink', ['training.angularjs.exercise01.entryStore'])
        .controller('EntrySinkController', ["entryStore", "$scope", "$rootScope", EntrySinkController]);

    function EntrySinkController(entryStore, $scope, $rootScope) {
        var me = this;
        me.entries = entryStore.getEntries();
        me.clickerThresholdExceeded = false;

        listenToClicker();
        ////////////////////////////////////

        function listenToClicker(){
            var dereg = $rootScope.$on('clicker.thresholdExceeded.click', function(eventObj){
                me.clickerThresholdExceeded = true;
                entryStore.getUsers();
            });
            $scope.$on('$destroy', dereg);
        }
    }
})();

