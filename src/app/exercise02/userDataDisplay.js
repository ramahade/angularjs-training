/**
 * Created by rajmahad on 12/15/2016.
 */
(function () {
    angular.module('training.angularjs.exercise02.userDataDisplay', [
        'training.angularjs.exercise02.userDataService'
    ]).directive('taUserDataList', [UserDataDisplayDirective]);

    function UserDataDisplayDirective() {
        var directive = {
            templateUrl: 'exercise02/userdatalist.tpl.html',
            controller: ['$scope', '$log', 'userDataService', UserDataDisplayController],
            controllerAs: 'userDataDisplay',
            link: link,
            scope: {
                userCount: '@'
            },
            bindToController: true
        };
        return directive;
        ///////////////////////////////

        function link($scope, element, attributes) {

        }

        /////////////////

    }

    function UserDataDisplayController($scope, $log, userDataService) {

        var me = this;
        // me.userCount Will be populated by Angular
        me.fetchInProgress = false;
        me.users = [];
        me.fetch = fetch;

        startWatchers();
        //////////////////////////
        /**
         * We listen for changes to the userCount field on the controller. Whenever it changes we trigger a fresh fetch
         * from the back-end.
         */
        function startWatchers() {
            var dereg = $scope.$watch(function(){
                return me.userCount;
            }, function(newValue, oldValue) {
                if (newValue !== oldValue) {
                    fetch();
                }
            });
            $scope.$on('$destroy', dereg);
        }

        function fetch() {
            me.fetchInProgress = true;
            userDataService.getAll()
                .then(function (users) {
                    var count = parseInt(me.userCount);
                    if(!angular.isNumber(count)){
                        $log.error("userCount is not a number :: "+me.userCount);
                        return;
                    }
                    me.users = [];
                    for (var i = 0; i < parseInt(me.userCount); i++) {
                        me.users.push(users[i]);
                    }
                })
                .finally(function () {
                    me.fetchInProgress = false;
                });
        }
    }
}());