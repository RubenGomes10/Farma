(function () {
    'use strict';

    angular.module('FarmaciaApp').factory('accountService', accountService);

    accountService.$inject = ['$http', '$q', '$httpParamSerializerJQLike', 'config'];
    function accountService($http, $q,$httpParamSerializerJQLike, config) {
        var controllerURL = '/Account';

        var service = {
            login: login,
            logout: logout,
            register: register,
            getUserInfo : getUserInfo
        };

        return service;

        function login(loginData) {

            var data = "grant_type=password&username=" + loginData.userName + "&password=" + loginData.password;
            return $http({
                method: 'POST',
                url: config.baseURL + '/token',
                data: data,
                headers: { 'Content-Type': 'application/x-www-form-urlencoded' }
            }).then(function (response) {
                return response.data;
            }).catch(function (error) {
                return $q.reject(error);
                //if (!angular.isObject(response.data) || !response.data.message) {
                //    return "Usernam e/ou password errados";
                //}
                //return response.data.errorMessage;
            });
        };

        function logout() {
            return $http({
                method: 'POST',
                url: config.apiURL + controllerURL + '/Logout'
            });
        };

        function register(registerData) {
            return $http({
                method: 'POST',
                url: config.apiURL + controllerURL + '/Register',
                data: $httpParamSerializerJQLike(registerData),
                headers: { 'Content-Type': 'application/x-www-form-urlencoded' }
            }).then(function (response) {
                return response.data;
            }).catch(function (error) {
                return $q.reject(error);
            });
        };

        function getUserInfo() {
            return $http({
                method: 'GET',
                url: config.apiURL + controllerURL + '/LocalUserInfo'
            }).then(function (response) {
                return response.data;
            }).catch(function (error) {
                return $q.reject(error);
            });
        }
    }
})();