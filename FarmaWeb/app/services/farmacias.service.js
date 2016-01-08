(function () {
    'use strict';

    angular.module('FarmaciaApp').factory('farmaciasService', FarmaciasService);

    FarmaciasService.$inject = ['$http', '$filter', '$rootScope'];
    function FarmaciasService($http, $filter, $rootScope) {
        var vm = this;
        var farmaciasAPI = {
            getAll: getAllFarmacias,
            getClientType: getClientType,
            getZone: getZone,
            getFarmaciaById: getFarmaciaById,
            createFarmacia: createFarmacia
        };

        return farmaciasAPI;

        function getAllFarmacias(params) {
            return $http({
                method: 'GET',
                url: $rootScope.baseURL + '/farmacia?start=' + params.start + '&number='
                    + params.number + '&sortField=' + params.sortField + '&sortDir=' + params.sortDir
            }).then(function (response) {
                return response.data;
            }).catch(function (response) {
                if (!angular.isObject(response.data) || !response.data.message) {
                    return "Aconteceu um erro inesperado na ligação ao servidor";
                }
                return response.data.errorMessage;
            });
        }

        function getClientType() {
            var list =
                [
                    {
                        id: 1,
                        text: 'Banca'
                   , clientType: "Banca" },
                    {
                        id: 2,
                        text: 'Saude'
                    }
                ]
            return list;
        }

        function getZone() {
            var list =
                [
                    {
                        id: 1,
                        text: 'Continente'
                   , clientType: "Banca" },
                    {
                        id: 2,
                        text: 'Ilhas'
                   , clientType: "Banca" },
                    {
                        id: 3,
                        text: 'PALOP'
                   , clientType: "Banca" },
                    {
                        id: 4,
                        text: 'Internacional'
                    }
                ]
            return list;
        }

        function getFarmaciaById(id) {
            return $http({
                method: 'GET',
                url: $rootScope.baseURL + '/farmacia/'+id
            });
            //return $filter('filter')(vm.list, { Id: id })[0];
        }

        function createFarmacia(farmacia) {
            vm.list.push(farmacia);
        }
    }
})();