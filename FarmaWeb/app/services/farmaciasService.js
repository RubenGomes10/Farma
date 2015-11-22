(function () {
    'use strict';

    angular.module('FarmaciaApp').factory('farmaciasService', FarmaciasService);

    FarmaciasService.$inject = ['$http'];
    function FarmaciasService($http) {
        var vm = this;
        var farmaciasAPI = {
            getAll : getAllFarmacias,
            getClientType: getClientType,
            getZone : getZone
        };


        function getAllFarmacias() {

            //return $http.get('api/Farmacias/GetAll');
            var list = [];
            list =
                [{ Nome: "Cais do Sodre", Distrito: "Lisboa" },
                { Nome: "Feira", Distrito: "Aveiro" },
                { Nome: "Porto", Distrito: "Porto" },
                { Nome: "Feira", Distrito: "Aveiro" },
                { Nome: "Aveiro", Distrito: "Aveiro" },
                { Nome: "Ourem", Distrito: "Leiria" },
                { Nome: "Espinho", Distrito: "Aveiro" },
                { Nome: "Coimbra", Distrito: "Coimbra" },
                { Nome: "Olhao", Distrito: "Algarve" },
                { Nome: "Expo", Distrito: "Lisboa" },
                { Nome: "Beja", Distrito: "Beja" }];

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