(function () {
    'use strict';

    angular.module('FarmaciaApp').controller('farmaciasController', FarmaciasController);

    FarmaciasController.$inject = ['$filter', 'farmaciasService'];
    function FarmaciasController($filter, $farmaciasService) {
        var vm = this;
        vm.displayedCollection = [];
        vm.itemsByPage = 2;
        vm.rowCollection = $farmaciasService.getAll();
        vm.searchEnabled = false;

        //Se as funções forem maiores, assignamos a variavel em cima, mas definimos a função em baixo
        vm.toggleSearch = function () {
            vm.searchEnabled = !vm.searchEnabled;
        }

        vm.addForm = function addForm() {
            alert("OK");
        }

        ////Para acesso http
        //vm.rowCollection = $farmaciasService.getAll().success(function(data, status){
        //    return data;
        //});

    }
})();