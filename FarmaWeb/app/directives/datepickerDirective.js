(function () {
    'use strict';

    angular
        .module('FarmaciaApp')
        .directive('customDatepicker', datepicker);

    function datepicker() {
        var directive = {
            restrict: 'EA',
            scope: {
                label: '@',
                model: '=',
                controlId: '@',
                placeholder: '@',
                min: '=',
                max: '=',
                isRequired: '@',
                cssClass: '@'
            },
            template:
                    '<label for="{{vm.controlId}}" class="control-label">{{vm.label}}</label>' +
                    '<p class="input-group">' +
                        '<input placeholder="{{vm.placeholder}}" type="text" min-date="vm.min" max-date="vm.max" class="{{vm.cssClass}}" uib-datepicker-popup="dd/MM/yyyy" ng-model="vm.model"' +
                        'show-weeks="false" is-open="vm.flag" datepicker-options="dateOptions" show-button-bar="false" id="{{vm.controlId}}" name="{{vm.controlId}}"' +
                        'ng-required="{{ vm.isRequired }}" date-model-format/>' +
                        '<span class="input-group-btn" >' +
                            '<button type="button" class="btn btn-default datepicker-position glyph-button" ng-click="vm.toggleDate($event)">' +
                                '<i class="glyphicon glyphicon-calendar"></i>' +
                            '</button>' +
                        '</span>' +
                    '</p>',
            controllerAs: 'vm',
            controller: controller,
            bindToController: true
        };

        return directive;

        function controller() {
            var vm = this;
            vm.flag = false;
            vm.toggleDate = function ($event) {
                $event.preventDefault();
                vm.flag = !vm.flag;
            };
        }
    }

})();