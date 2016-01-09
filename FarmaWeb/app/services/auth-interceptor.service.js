(function () {
    'use strict';

    angular.module('FarmaciaApp').factory('authInterceptorService', authInterceptorService);

    authInterceptorService.$inject = ['$injector','$q', 'localStorageService'];
    function authInterceptorService($injector,$q, localStorageService) {

        var service = {
            request: request,
            responseError: responseError
        }

        return service;

        function request(config) {
            console.log('request interceptor');
            config.headers = config.headers || {};

            var authData = localStorageService.get('authorizationData');
            if (authData) {
                config.headers.Authorization = 'Bearer ' + authData.token;
            }

            return config;
        }

        function responseError(error) {
            console.log('response interceptor');
            var loggedIn = false;
            var authData = localStorageService.get('authorizationData');
            if (authData) {
                loggedIn = true;
            }

            if (error.status === 401 && !loggedIn) {
                $injector.get('$state').go('login');
            }
            return $q.reject(error);
        }
    }

})();