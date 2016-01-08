(function () {
    'use strict';

    angular.module('FarmaciaApp').controller('FarmaciaListController', controller);

    controller.$inject = ['farmaciasService'];
    function controller($farmaciasService) {
        var vm = this;
        vm.itemsByPage = 5;
        vm.rowCollection = [];
        

        vm.searchEnabled = false;

        vm.createFarmaciasLink = 'createFarmacia';
        vm.listFarmaciasLink = 'farmacia';
        vm.getFarmacias = getFarmacias;

        //Se as funções forem maiores, assignamos a variavel em cima, mas definimos a função em baixo
        vm.toggleSearch = function () {
            vm.searchEnabled = !vm.searchEnabled;
        }

        function getFarmacias(tableState) {
            var pagination = tableState.pagination;
            var start = pagination.start || 0;
            var number = pagination.number;
            var smartTableParams =
                {
                    start : start,
                    number : number,
                    sortField : tableState.sort.predicate !== undefined ? tableState.sort.predicate : '2',
                    sortDir : (tableState.sort.reverse == true || tableState.sort.reverse == undefined)  ? 'asc' : 'desc'
                }
            $farmaciasService.getAll(smartTableParams).then(function (response) {
                successCallback(response, tableState);
            })
            .catch(errorCallback);
        }

        function successCallback(response, tableState) {
            vm.rowCollection = response.FarmaciaList;
            tableState.pagination.numberOfPages = Math.ceil(response.TotalRecords / tableState.pagination.number);
        }

        function errorCallback(response) {
            alertify.error(response);
        }
    }
})();