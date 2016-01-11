(function () {
    'use strict';

    angular.module('FarmaciaApp').factory('helpers', helpers);

    //helpers.$inject = ['$q', '$rootScope', '$timeout', 'config'];
    function helpers() {

        var service = {
            checkRole: checkRole
        };

        return service;

        function checkRole(userRoles, rolesToCheck) {
            if (!rolesToCheck) {
                return true;
            }
            if (!userRoles) {
                return false;
            }
            for (var i = 0; i < userRoles.length; i++) {
                if (rolesToCheck.indexOf(userRoles[i]) > -1) {
                    return true;
                }
            }
            return false;
        }
    }
})();