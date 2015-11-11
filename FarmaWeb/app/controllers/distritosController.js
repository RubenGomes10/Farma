(function () {
    'use strict';

    angular.module('FarmaciaApp').controller('distritosController', DistritosController);

    DistritosController.$inject = ['$filter'];
    function DistritosController($filter) {
        var vm = this;
        vm.displayedCollection = [];

        vm.rowCollection =
            [{ Nome: "Franco", Distrito: "Lisboa" },
            { Nome: "Feira", Distrito: "Aveiro" },
            { Nome: "Beja", Distrito: "Beja" }];

    }
})();