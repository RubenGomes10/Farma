(function () {
    'use strict';

    angular.module('FarmaciaApp').factory('farmaciasService', FarmaciasService);

    FarmaciasService.$inject = ['$http'];
    function FarmaciasService($http) {
        var vm = this;
        var farmaciasAPI = {
            getAll: getAllFarmacias,
            getClientType: getClientType,
            getZone: getZone
        };


        function getAllFarmacias() {

            //return $http.get('api/Farmacias/GetAll');
            var list = [];
            list =
                [
                    { Id: 1, Nome: "Cais do Sodre", Distrito: "Lisboa" },
                    { Id: 2, Nome: "Feira", Distrito: "Aveiro" },
                    { Id: 3, Nome: "Porto", Distrito: "Porto" },
                    { Id: 4, Nome: "Feira", Distrito: "Aveiro" },
                    { Id: 5, Nome: "Aveiro", Distrito: "Aveiro" },
                    { Id: 6, Nome: "Ourem", Distrito: "Leiria" },
                    { Id: 7, Nome: "Espinho", Distrito: "Aveiro" },
                    { Id: 8, Nome: "Coimbra", Distrito: "Coimbra" },
                    { Id: 9, Nome: "Olhao", Distrito: "Algarve" },
                    { Id: 10, Nome: "Expo", Distrito: "Lisboa" },
                    { Id: 11, Nome: "Beja", Distrito: "Beja" },
                    { Id: 12, Nome: "Ourem", Distrito: "Leiria" },
                    { Id: 13, Nome: "Espinho", Distrito: "Aveiro" },
                    { Id: 14, Nome: "Coimbra", Distrito: "Coimbra" },
                    { Id: 15, Nome: "Olhao", Distrito: "Algarve" },
                    { Id: 16, Nome: "Expo", Distrito: "Lisboa" },
                    { Id: 17, Nome: "Beja", Distrito: "Beja" }
                ];

            return list;
        }

        function getClientType() {
            var list =
                [
                    {
                        id: 1,
                        text: 'Banca'
                    },
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
                    },
                    {
                        id: 2,
                        text: 'Ilhas'
                    },
                    {
                        id: 3,
                        text: 'PALOP'
                    },
                    {
                        id: 4,
                        text: 'Internacional'
                    }
                ]
            return list;
        }

        return farmaciasAPI;

    }

})();