(function () {
    'use strict';

    angular.module('FarmaciaApp').factory('farmaciasService', FarmaciasService);

    FarmaciasService.$inject = ['$http'];
    function FarmaciasService($http) {
        var vm = this;
        var farmaciasAPI = {};
        farmaciasAPI.getAll = getAllFarmacias;
        farmaciasAPI.getClientType = getClientType;


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
                        type: 'Banca'
                    },
                    {
                        id: 2,
                        type: 'Saude'
                    }
                ]
            return list;
        }

        return farmaciasAPI;

    }

})();