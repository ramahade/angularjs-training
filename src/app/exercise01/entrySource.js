/**
 * Created by rajmahad on 12/13/2016.
 */
(function () {
    'use strict';

    angular
        .module('training.angularjs.exercise01.entrySource', ['training.angularjs.exercise01.entryStore'])
        .controller('EntrySourceController', ['entryStore', EntrySourceController]);

    function EntrySourceController(entryStore) {
        var me = this;

        me.entry = null;
        me.addEntry = function () {
            if (me.entry) {
                entryStore.add(me.entry);
                me.entry = null;
            }
        };
    }
})();

