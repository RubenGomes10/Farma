(function () {
    'use strict';

    angular.module('FarmaciaApp').controller('farmaciasController', FarmaciasController);

    FarmaciasController.$inject = ['$filter', 'farmaciasService'];
    function FarmaciasController($filter, $farmaciasService) {
        var vm = this;
        vm.displayedCollection = [];
        vm.rowCollection = $farmaciasService.getAll();
        vm.addForm = addForm;

        function addForm() {
            alert("OK");
        }
        ////Para acesso http
        //vm.rowCollection = $farmaciasService.getAll().success(function(data, status){
        //    return data;
        //});

    }
})();