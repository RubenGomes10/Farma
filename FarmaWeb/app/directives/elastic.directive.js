(function () {
    'use strict';

    angular.module('FarmaciaApp').directive('elastic', elastic);

    elastic.$inject = ['$timeout', '$rootScope'];
    function elastic($timeout, $rootScope) {
        return {
            restrict: 'A',
            link: function($scope, element) {
                $scope.initialHeight = $scope.initialHeight || 300; //queria pegar no max-height da CSS mas nao estou a conseguir
                var resize = function() {
                    element[0].style.height = $scope.initialHeight;
                    element[0].style.height = "" + element[0].style.height + element[0].scrollHeight + "px";
                };
                //element.on("input change blur keyup", resize);
                $rootScope.$on('resize::errorChange', resize);
                $timeout(resize, 0);
            }
        };
    }

})();