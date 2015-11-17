(function () {
    'use strict';

    angular.module('FarmaciaApp').directive('tableHeaders', TableHeaders);

    function TableHeaders()
    {
        return {
            restrict: 'E',
            scope: false,
            templateUrl: '/app/directives/tableHeaders.html'
        }
    }
})();