(function () {
    'use strict';

    angular.module('FarmaciaApp').controller('distritoController', controller);

    controller.$inject = ['$filter'];
    function controller($filter) {
        var vm = this;
        vm.displayedCollection = [];

        vm.rowCollection =
            [{ Nome: "Franco", Distrito: "Lisboa" },
            { Nome: "Feira", Distrito: "Aveiro" },
            { Nome: "Beja", Distrito: "Beja" }];

    }
})();