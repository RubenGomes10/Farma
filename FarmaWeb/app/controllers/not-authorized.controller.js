(function () {
    'use strict';

    angular.module('FarmaciaApp').controller('NotAuthController', controller);

    controller.$inject = ['$http', '$state', 'authService']; //para ir buscar os menus dinamicamente -- Optimização
    function controller($http, $state, authService) {
        /*Variables and Functions declarations*/
        var vm = this;
        vm.logout = function () {
            authService.logout();
        }

        vm.authentication = authService.authModel;
    }

})();