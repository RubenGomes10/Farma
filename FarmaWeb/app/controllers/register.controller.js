(function () {
    'use strict';

    angular.module('FarmaciaApp').controller('RegisterController', controller);

    controller.$inject = ['$http', '$state','$timeout', '$rootScope', 'authService']; //para ir buscar os menus dinamicamente -- Optimização
    function controller($http, $state, $timeout, $rootScope, authService) {
        /*Variables and Functions declarations*/
        var vm = this;
        vm.register = register;
        vm.errorMessage = '';
        vm.authModel =
            {
                Username: '',
                Password: '',
                ConfirmPassword: ''
            }

        function register() {
            authService.register(vm.authModel).then(function () {
                $state.go('login');
            })
            .catch(function (error) {
                var errors = [];
                for (var key in error.data.ModelState) {
                    for (var i = 0; i < error.data.ModelState[key].length; i++) {
                        errors.push(error.data.ModelState[key][i]);
                        alertify.error(error.data.ModelState[key][i])
                    }
                }
                //vm.errorMessage = "Falha no registo: " + '\n' + errors.join('\n');
                //$rootScope.$broadcast('resize::errorChange');
                //$timeout(function () {
                //    vm.errorMessage = "";
                //}, 3000);
                vm.authModel.Username = '';
                vm.authModel.Password = '';
                vm.authModel.ConfirmPassword = '';
                //alertify('User ou Password Errados');
            })
        }
    }

})();