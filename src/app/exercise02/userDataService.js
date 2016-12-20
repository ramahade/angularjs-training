/**
 * Created by rajmahad on 12/15/2016.
 */
(function () {
    angular.module('training.angularjs.exercise02.userDataService', []).service('userDataService', ['$http', UserDataService]);

    function UserDataService($http) {
        var me = this;
        me.getAll = getAll;

        //////////////////////////
        function getAll() {
            return $http.get('https://jsonplaceholder.typicode.com/users', {
                cache: false
            }).then(function success(response) {
                return response.data;
            });
        }
    }
}());