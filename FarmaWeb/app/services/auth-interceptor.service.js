(function () {
    'use strict';

    angular.module('FarmaciaApp').factory('authInterceptorService', authInterceptorService);

    authInterceptorService.$inject = ['$injector','$q', 'localStorageService', 'usSpinnerService'];
    function authInterceptorService($injector, $q, localStorageService, usSpinnerService) {

        var service = {
            request: request,
            response: response,
            responseError: responseError
        }

        return service;

        function request(config) {
            console.log('request interceptor');
            usSpinnerService.spin('spinner');
            config.headers = config.headers || {};

            var authData = localStorageService.get('authorizationData');
            if (authData) {
                config.headers.Authorization = 'Bearer ' + authData.token;
            }

            return config;
        }

        function responseError(error) {
            console.log('response interceptor');
            usSpinnerService.stop('spinner');
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

        function response(response) {
            usSpinnerService.stop('spinner');
            console.log('response');
            return response;
        }
    }

})();