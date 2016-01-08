(function () {
    'use strict';

    angular.module('FarmaciaApp').factory('authService', authService);

    authService.$inject = ['$http', '$injector', '$q', 'dataservice', 'localStorageService'];
    function authService($http, $injector, $q, dataservice, localStorageService) {
        var vm = this;
        vm.errorMessage = '';
        vm.authModel = {
            isAuthenticated: false,
            userName: '',
            userRetrieved: false,
            roles: []
        };

        vm.service = {
            authModel: vm.authModel,
            login: login,
            logOut: logOut,
            fillData: fillData
        };

        return service;

        function login(loginData) {
            return dataservice.login(loginData).then(
                function () {
                    loginSucess(result, loginData);
                })
                .catch(function () {
                    loginError(error);
                });
        }

        function logOut() {
            dataservice.logout().then(function () {
                clearAuthStorage();
                $injector.get('$state').go('login');
            }, function () {
                clearAuthStorage();
                $injector.get('$state').go('login');
            });
        }

        function loginSucess(result, loginData) {
            localStorageService.set('authorizationData',
            {
                token: result.access_token,
                userName: loginData.userName
            });

            vm.authModel.isAuthenticated = true;
            vm.authModel.userName = loginData.userName;
            vm.authModel.userRetrieved = false;
            //vm.authModel.roles = loginData.Roles;
            return result;
        }

        function loginError(error) {
            vm.errorMessage = error
        }

        function clearAuthStorage() {
            localStorageService.remove('authorizationData');
            vm.authModel.isAuthenticated = false;
            vm.authModel.userName = '';
            vm.authModel.userRetrieved = false;
            vm.authModel.roles.slice(0, authData.roles.length);
        }

        function fillData() {
            var data = localStorageService.get('authorizationData');
            if (data) {
                vm.authModel.isAuthenticated = true;
                vm.authModel.userName = data.userName;
                if (!vm.authModel.userRetrieved) {
                    return dataservice.getUserInfo().then(function (result) {
                        vm.authModel.userRetreived = true;
                        var userData = result.data;
                        vm.authModel.roles = userData.roles;
                    });
                }
            }
            return $q.when(true);
        }
    }

})();