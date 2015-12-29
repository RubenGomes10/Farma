(function () {
    'use strict';

    angular.module('FarmaciaApp').controller('farmaciaDetailController', controller);

    controller.$inject = ['$filter','$stateParams', 'farmaciasService', 'dateFilter', 'datepickerDirective'];
    function controller($filter, $stateParams, $farmaciasService, dateFilter) {
        var vm = this;
        vm.readonly = true;

        vm.model = $farmaciasService.getFarmaciaById($stateParams.id);
        console.log(vm.model);
        vm.listFarmaciasLink = 'farmacia';

        // DROPDOWNS BEGIN
        vm.getClientTypeDropdownSrc = function () {
            vm.clientTypeDropdown = $farmaciasService.getClientType();
        }
        vm.getZoneDropdownSrc = function () {
            vm.zoneDropdown = $farmaciasService.getZone();
        }
        //DROPDOWNS END

        vm.sendForm = function sendForm() {
            console.log(vm.model);
            $farmaciasService.createFarmacia(vm.model);
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