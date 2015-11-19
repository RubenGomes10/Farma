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
                [{ Nome: "Franco", Distrito: "Lisboa" },
                { Nome: "Feira", Distrito: "Aveiro" },
                { Nome: "Feira", Distrito: "Aveiro" },
                { Nome: "Feira", Distrito: "Aveiro" },
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