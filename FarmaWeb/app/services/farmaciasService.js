(function () {
    'use strict';

    angular.module('FarmaciaApp').factory('farmaciasService', FarmaciasService);

    FarmaciasService.$inject = ['$http', '$filter'];
    function FarmaciasService($http, $filter) {
        var vm = this;
        var farmaciasAPI = {
            getAll: getAllFarmacias,
            getClientType: getClientType,
            getZone: getZone,
            getFarmaciaById: getFarmaciaById
        };


        function getAllFarmacias() {

            //return $http.get('api/Farmacias/GetAll');
            var list = [];
            list =
                [
                    { Id: 1, name: "Cais do Sodre", district: "Lisboa", clientType: "Barraca", initialDate: "21/03/2014" },
                    { Id: 2, name: "Feira", district: "Aveiro", clientType: "Banca" },
                    { Id: 3, name: "Porto", district: "Porto", clientType: "Banca" },
                    { Id: 4, name: "Feira", district: "Aveiro", clientType: "Saúde" },
                    { Id: 5, name: "Aveiro", district: "Aveiro", clientType: "Banca" },
                    { Id: 6, name: "Ourem", district: "Leiria", clientType: "Banca" },
                    { Id: 7, name: "Espinho", district: "Aveiro", clientType: "Saúde" },
                    { Id: 8, name: "Coimbra", district: "Coimbra", clientType: "Banca" },
                    { Id: 9, name: "Olhao", district: "Algarve", clientType: "Banca" },
                    { Id: 10, name: "Expo", district: "Lisboa", clientType: "Saúde" },
                    { Id: 11, name: "Beja", district: "Beja", clientType: "Banca" },
                    { Id: 12, name: "Ourem", district: "Leiria", clientType: "Banca" },
                    { Id: 13, name: "Espinho", district: "Aveiro", clientType: "Saúde" },
                    { Id: 14, name: "Coimbra", district: "Coimbra", clientType: "Banca" },
                    { Id: 15, name: "Olhao", district: "Algarve", clientType: "Banca" },
                    { Id: 16, name: "Expo", district: "Lisboa", clientType: "Banca" },
                    { Id: 17, name: "Beja", district: "Beja" }
                ];

            return list;
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
            var list =
                [
                    { Id: 1, name: "Cais do Sodre", district: "Lisboa", clientType: "Barraca", initialDate: "21/03/2014", isActive: true },
                    { Id: 2, name: "Feira", district: "Aveiro", clientType: "Banca" },
                    { Id: 3, name: "Porto", district: "Porto", clientType: "Banca" },
                    { Id: 4, name: "Feira", district: "Aveiro", clientType: "Banca" },
                    { Id: 5, name: "Aveiro", district: "Aveiro", clientType: "Banca" },
                    { Id: 6, name: "Ourem", district: "Leiria", clientType: "Banca" },
                    { Id: 7, name: "Espinho", district: "Aveiro", clientType: "Banca" },
                    { Id: 8, name: "Coimbra", district: "Coimbra", clientType: "Banca" },
                    { Id: 9, name: "Olhao", district: "Algarve", clientType: "Banca" },
                    { Id: 10, name: "Expo", district: "Lisboa", clientType: "Banca" },
                    { Id: 11, name: "Beja", district: "Beja", clientType: "Banca" },
                    { Id: 12, name: "Ourem", district: "Leiria", clientType: "Banca" },
                    { Id: 13, name: "Espinho", district: "Aveiro", clientType: "Banca" },
                    { Id: 14, name: "Coimbra", district: "Coimbra", clientType: "Banca" },
                    { Id: 15, name: "Olhao", district: "Algarve", clientType: "Banca" },
                    { Id: 16, name: "Expo", district: "Lisboa", clientType: "Banca" },
                    { Id: 17, name: "Beja", district: "Beja" }
                ];
            return $filter('filter')(list, { Id: id })[0];
        }

        return farmaciasAPI;

    }

})();