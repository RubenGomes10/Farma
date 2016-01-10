(function () {
    'use strict';

    angular.module('FarmaciaApp').controller('DistrictController', controller);

    controller.$inject = ['$filter'];
    function controller($filter) {
        var vm = this;
        vm.displayedCollection = [];
        vm.createFarmaciasLink = 'createFarmacia';
        vm.rowCollection =
            [{ name: "Franco", district: "Lisboa" },
            { name: "Feira", district: "Aveiro" },
            { name: "Beja", district: "Beja" }];

    }
})();