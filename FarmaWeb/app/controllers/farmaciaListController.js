(function () {
    'use strict';

    angular.module('FarmaciaApp').controller('farmaciaListController', controller);

    controller.$inject = ['$filter', 'farmaciasService'];
    function controller($filter, $farmaciasService) {
        var vm = this;
        vm.itemsByPage = 5;
        vm.rowCollection = $farmaciasService.getAll();
        vm.searchEnabled = false;

        vm.createFarmaciasLink = 'createFarmacia';
        vm.listFarmaciasLink = 'farmacia';

        //Se as funções forem maiores, assignamos a variavel em cima, mas definimos a função em baixo
        vm.toggleSearch = function () {
            vm.searchEnabled = !vm.searchEnabled;
        }
    }
})();