(function() {
    'use strict';

    angular
        .module('FarmaciaApp')
        .directive('dateModelFormat', dateModelFormat);
    
    function dateModelFormat(dateFilter) {
        return {
            require: 'ngModel',
            link: function (scope, element, attrs, ngModel) {
                ngModel.$parsers.push(function (viewValue) {
                    return dateFilter(viewValue, 'dd/MM/yyyy');
                });
            }
        }
    }

})();