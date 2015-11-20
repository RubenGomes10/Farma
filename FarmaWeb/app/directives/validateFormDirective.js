(function() {
    'use strict';

    angular
        .module('FarmaciaApp')
        .directive('validateFormDirective', validateFormDirective);

    validateFormDirective.$inject = ['$parse', '$compile'];
    
    function validateFormDirective($parse, $compile) {

        var directive = {
            require: 'form',
            link: link,
        };
        return directive;

        function link(scope, element, attrs, form) {
            var vm = scope;
            form.$submitted = false;
            var callback = $parse(attrs.validateFormDirective);
            scope.formElement = element;
            element.on('submit', function (event) {
                scope.$apply(function () {
                    form.$submitted = true;
                    if (form.$valid) {
                        callback(scope, { $event: event });
                        form.$submitted = false;
                    }
                    else {
                        var alert = angular.element('<uib-alert ng-show="vm.submitErrors" type="danger">Certifique-se que preencheu correctamente os campos</uib-alert>');
                        if ($('[role=alert]', scope.formElement).length <= 0) {
                            scope.formElement.prepend(alert);
                            $compile(alert)(scope);
                        }
                    }
                });
            });
        }
    }

})();