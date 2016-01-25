(function () {
    'use strict';

    angular.module('FarmaciaApp').controller('FarmaciaCreateController', controller);

    controller.$inject = ['$filter', 'farmaciasService', 'dateFilter', 'datepickerDirective'];
    function controller($filter, $farmaciasService, dateFilter) {
        var vm = this;
        vm.readonly = false;
        vm.submitted = false;
        vm.submitErrors = true;

        vm.listFarmaciasLink = 'farmacia';
        vm.model = {
            clientType: '',
            codeANF: '',
            clientSAP: '',
            initialReq: '',
            zone: '',
            isActive: false,
            initialDate: '',
            rescDate: '',
            name: '',
            owner: '',
            address: '',
            NIF: '',
            locale: '',
            techDirector: '',
            phone: '',
            localCode: '',
            fax: '',
            district: '',
            email: '',
            county: '',
            agent: ''
        }
        // DROPDOWNS BEGIN
        vm.clientTypeDropdown = [];
        vm.getClientTypeDropdownSrc = function () {
            vm.clientTypeDropdown = $farmaciasService.getClientType();
        }
        vm.zoneDropdown = [];
        vm.getZoneDropdownSrc = function () {
            vm.zoneDropdown = $farmaciasService.getZone();
        }
        //DROPDOWNS END

        vm.sendForm = function sendForm() {
            console.log(vm.form);
            vm.readonly = true;
            vm.submitted = true;
            $farmaciasService.createFarmacia(vm.form);
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