(function() {
    'use strict';

    angular
        .module('FarmaciaApp')
        .directive('validateFormDirective', validateFormDirective);

    validateFormDirective.$inject = ['$parse', '$compile'];
    
    function validateFormDirective($parse, $compile) {

        var directive = {
            scope: {
                submitErrors: '=',
                callback: '&'
            },
            require: 'form',
            link: link,
            controllerAs: 'vm',
            controller: controller,
            bindToController: true
        };
        return directive;

        function link(scope, element, attrs, form) {
            form.$submitted = false;
            scope.formElement = element;
            element.on('submit', function (event) {
                scope.$apply(function () {
                    form.$submitted = true;
                    if (form.$valid) {
                        scope.vm.callback();
                        form.$submitted = false;
                    }
                    else {
                        scope.vm.submitErrors = true;
                        var alert = angular.element('<uib-alert ng-show="vm.submitErrors" type="danger" dismiss-on-timeout="3000" close="vm.closeAlert()">Certifique-se que preencheu correctamente os campos</uib-alert>');
                        $('[role=alert]', scope.formElemen).remove();
                        scope.formElement.prepend(alert);
                        $compile(alert)(scope);
                    }
                });
            });
        }

        function controller(){
            var vm = this;
            vm.closeAlert = function () {
                vm.submitErrors = false;
            }
        }
    }

})();