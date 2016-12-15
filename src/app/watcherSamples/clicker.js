/**
 * Created by rajmahad on 12/14/2016.
 */
(function () {
    'use strict';
    angular.module('training.angularjs.watcherSamples.clicker', []).controller('ClickerController', ['$scope', '$log', '$rootScope', ClickerController]);

    function ClickerController($scope, $log, $rootScope) {
        var me = this;
        me.clickCount = 0;
        me.thresholdExceeded = false;
        me.onClick = onClick;

        startWatchers();
        ///////////////////
        var clickThreshold = 5;
        function onClick() {
            me.clickCount++;
        }

        function startWatchers() {
            var dereg = $scope.$watch(function expression() {
                return me.clickCount;
            }, function(newValue, oldValue) {
                if (newValue !== oldValue && !me.thresholdExceeded) {
                    checkThreshold();
                }
            });
            $scope.$on('$destroy', dereg);
        }

        function checkThreshold(){
            me.thresholdExceeded = me.clickCount > clickThreshold;
            if(me.thresholdExceeded){
                $rootScope.$emit('clicker.thresholdExceeded.click', {clicks: me.clickCount});
            }
        }
    }
}());