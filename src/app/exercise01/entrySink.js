/**
 * Created by rajmahad on 12/13/2016.
 */
(function () {
    'use strict';

    angular
        .module('training.angularjs.exercise01.entrySink', ['training.angularjs.exercise01.entryStore'])
        .controller('EntrySinkController', ["entryStore", EntrySinkController]);

    function EntrySinkController(entryStore) {
        var me = this;
        me.entries = entryStore.getEntries();
    }
})();

