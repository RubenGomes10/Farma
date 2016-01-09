﻿(function () {
    'use strict';

    angular.module('FarmaciaApp').factory('authService', authService);

    authService.$inject = ['$http', '$injector', '$q', 'accountService', 'localStorageService'];
    function authService($http, $injector, $q, accountService, localStorageService) {
        var authModel = {
            isAuthenticated: false,
            userName: '',
            userRetrieved: false,
            roles: []
        };

        var service = {
            authModel: authModel,
            login: login,
            logOut: logout,
            fillData: fillData
        };

        return service;

        function login(loginData) {
            return accountService.login(loginData).then(
                function (result) {
                    loginSucess(result, loginData);
                })
                .catch(function (error) {
                    return loginError(error);
                    //return $q.reject(error);
                });
        }

        function logout() {
            accountService.logout().then(function () {
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

            authModel.isAuthenticated = true;
            authModel.userName = loginData.userName;
            authModel.userRetrieved = false;
            //authModel.roles = loginData.Roles;
            return result;
        }

        function loginError(error) {
            return $q.reject(error);
        }

        function clearAuthStorage() {
            localStorageService.remove('authorizationData');
            authModel.isAuthenticated = false;
            authModel.userName = '';
            authModel.userRetrieved = false;
            authModel.roles.slice(0, authData.roles.length);
        }

        function fillData() {
            var data = localStorageService.get('authorizationData');
            if (data) {
                authModel.isAuthenticated = true;
                authModel.userName = data.userName;
                if (!authModel.userRetrieved) {
                    return accountService.getUserInfo().then(function (result) {
                        authModel.userRetreived = true;
                        var userData = result.data;
                        authModel.roles = userData.roles;
                    });
                }
            }
            return $q.when(true);
        }
    }

})();