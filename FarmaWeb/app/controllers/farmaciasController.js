(function () {
    'use strict';

    angular.module('FarmaciaApp').controller('farmaciasController', FarmaciasController);

    FarmaciasController.$inject = ['$filter', 'farmaciasService', 'dateFilter', 'datepickerDirective'];
    function FarmaciasController($filter, $farmaciasService, dateFilter) {
        var vm = this;
        vm.displayedCollection = [];
        vm.itemsByPage = 5;
        vm.rowCollection = $farmaciasService.getAll();
        vm.searchEnabled = false;
        vm.submitted = false;
        vm.submitErrors = true;
        vm.createFarmaciasLink = 'createFarmacias';
        vm.listFarmaciasLink = 'farmacias';
        vm.form = {
            clientType: '',
            codeANF: '',
            clientSAP: '',
            initialReq: '',
            zone: '',
            isActive: false,
            initialDate: '',
            rescDate: ''
        }
        // DROPDOWNS BEGIN
        vm.clientTypeDropdownSrc = $farmaciasService.getClientType();
        vm.zoneDropdownSrc = $farmaciasService.getZone();
        //DROPDOWNS END

        //Se as funções forem maiores, assignamos a variavel em cima, mas definimos a função em baixo
        vm.toggleSearch = function () {
            vm.searchEnabled = !vm.searchEnabled;
        }



        vm.sendForm = function sendForm() {
            console.log(vm.form);
        }

        // DATEPICKER BEGIN
        vm.formatSubmitDate = function (date) {
            vm.form.initialDate = $filter('date')(date, 'dd/MM/yyyy');
        }
        vm.minDate = new Date(1900, 11, 2);
        vm.maxDate = new Date(2060, 10, 22);
        ////Para acesso http
        //vm.rowCollection = $farmaciasService.getAll().success(function(data, status){
        //    return data;
        //});
        // DATEPICKER END
        


    }
})();