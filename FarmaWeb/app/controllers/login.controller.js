(function () {
    'use strict';

    angular.module('FarmaciaApp').controller('LoginController', controller);

    controller.$inject = ['$http', '$state','$timeout', 'authService']; //para ir buscar os menus dinamicamente -- Optimização
    function controller($http, $state, $timeout, authService) {
        /*Variables and Functions declarations*/
        var vm = this;
        vm.login = login;
        vm.errorMessage = '';
        vm.authModel =
            {
                userName: '',
                password: ''
            }

        function login() {
            authService.login(vm.authModel).then(function () {
                $state.go('farmacia');
            })
            .catch(function (error) {
                alertify.error("User ou Password Errados");
                //vm.errorMessage = "User ou Password Errados";
                //$timeout(function () {
                //    vm.errorMessage = "";
                //}, 3000);
                vm.authModel.userName = '';
                vm.authModel.password = '';
                //alertify('User ou Password Errados');
            })
        }
    }

})();