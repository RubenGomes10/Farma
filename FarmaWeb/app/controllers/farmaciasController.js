(function () {
    'use strict';

    angular.module('FarmaciaApp').controller('farmaciasController', FarmaciasController);

    FarmaciasController.$inject = ['$filter'];
    function FarmaciasController($filter) {
        var vm = this;
        vm.displayedCollection = [];

        vm.rowCollection =
            [{ Nome: "Franco", Distrito: "Lisboa" },
            { Nome: "Feira", Distrito: "Aveiro" },
            { Nome: "Feira", Distrito: "Aveiro" },
            { Nome: "Feira", Distrito: "Aveiro" },
            { Nome: "Beja", Distrito: "Beja" }];

    }
})();