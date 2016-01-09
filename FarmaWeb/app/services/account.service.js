(function () {
    'use strict';

    angular.module('FarmaciaApp').factory('accountService', accountService);

    accountService.$inject = ['$http', '$q', 'config'];
    function accountService($http, $q, config) {
        var controllerURL = '/Account';

        var service = {
            login: login,
            logout: logout,
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
                url: config.baseURL + '/Logout'
            });
        };
    }
})();