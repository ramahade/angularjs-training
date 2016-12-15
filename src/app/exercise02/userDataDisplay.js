/**
 * Created by rajmahad on 12/15/2016.
 */
(function () {
    angular.module('training.angularjs.exercise02.userDataDisplay', [
        'training.angularjs.exercise02.userDataService'
    ]).controller('UserDataDisplayController', ['userDataService', UserDataDisplayController]);

    function UserDataDisplayController(userDataService) {
        var me = this;
        me.fetch = fetch;
        me.fetchInProgress = false;
        me.users = [];

        //////////////////////////
        function fetch() {
            me.fetchInProgress = true;
            userDataService.getAll()
                .then(function (users) {
                    me.users = users;
                })
                .finally(function () {
                    me.fetchInProgress = false;
                });
        }
    }
}());