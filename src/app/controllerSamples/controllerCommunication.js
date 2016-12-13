/**
 * Created by rajmahad on 12/12/2016.
 */
/**
 * Controller Communication Sample controllers
 */
(function () {
    "use strict";
    angular.module("training.angularjs.controllerSamples.controllerCommunication", [])
    /**
     * Source Controller for Controller Communication Samples.
     */
        .controller("DataSourceController", ["dataStore",
            function (dataStore) {
                var me = this;
                me.setName = function setName(name){
                    dataStore.set("name", name);
                };
            }
        ])
        /**
         * Destination Controller for Controller Communication Samples.
         */
        .controller("DataSinkController", ["dataStore",
            function (dataStore) {
                var me = this;
                me.getName = function getName(){
                    return dataStore.get("name");
                };
            }
        ])
        /**
         * Destination Controller for Controller Communication Samples.
         */
        .service("dataStore", ["$log",
            function ($log) {
                $log.debug("dataStore initialized");
                var me = this,
                    dataStore = {};

                function set(key, value) {
                    if (key && value) {
                        dataStore[key] = value;
                    }
                }

                function get(key) {
                    if (key) {
                        return dataStore[key];
                    }
                }

                function list() {
                    return angular.copy(dataStore);
                }

                me.set = set;
                me.get = get;
                me.list = list;
            }
        ]);
}());
