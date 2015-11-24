(function () {
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
                        if ($('[role=alert]', scope.formElement).length <= 0 || $('.alert-temp[role=alert]', scope.formElement).length <= 0) {
                            scope.vm.submitErrors = true;
                            var alert = angular.element('<uib-alert type="danger" dismiss-on-timeout="3000" close="vm.closeAlert()">Certifique-se que preencheu correctamente os campos</uib-alert>');
                            $('[role=alert]', scope.formElement).remove();
                            scope.formElement.prepend(alert);
                            $compile(alert)(scope);

                            setTimeout(function () {
                                $('[role=alert]', scope.formElement).focus().addClass('alert-temp');
                            }, 0)
                        }
                    }
                });
            });
        }

        function controller() {
            var vm = this;
            vm.closeAlert = function () {
                $('[role=alert]', vm.formElement).removeClass('alert-temp');
                vm.submitErrors = false;
            }
        }
    }

})();