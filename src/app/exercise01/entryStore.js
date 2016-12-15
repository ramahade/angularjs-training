/**
 * Created by rajmahad on 12/13/2016.
 */
(function () {
    'use strict';

    angular
        .module('training.angularjs.exercise01.entryStore', [])
        .service('entryStore', ['$http', '$log', EntryStore]);

    function EntryStore($http, $log) {
        var me = this, store = [];
        me.add = add;
        me.getEntries = getEntries;

        ////////////////
        function add(entry) {
            var addable = true;
            angular.forEach(store, function (ele) {
                if (ele === entry) {
                    addable = false;
                }
            });
            if (addable) {
                store.push(entry);
            }
        }

        function getEntries() {
            return store;//Not ideal. Try not to expose your internal objects directly.
        }
    }

})();

