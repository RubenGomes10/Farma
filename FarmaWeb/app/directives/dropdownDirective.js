(function () {
    'use strict';

    angular
        .module('FarmaciaApp')
        .directive('customDropdown', dropdown);

    function dropdown() {
        var directive = {
            restrict: 'E',
            replace: true,
            scope: {
                label: '@',
                value: '@',
                model: '=',
                controlId: '@',
                isRequired: '@',
                cssClass: '@',
                source: '=',
                form: '=',
                setData: '&',
                isReadonly: '='
            },
            template:
                    '<div class="{{vm.cssClass}}" ng-init="vm.setData()" ng-class="{\'has-error\': vm.form.$submitted && vm.form.{{vm.controlId}}.$invalid}">'
                        + '<label for="tipoCliente" class="control-label">{{vm.label}}</label>'
                        + '<div class="btn-group" uib-dropdown>'
                          + '<button type="button" class="btn btn-default dropdown-button" uib-dropdown-toggle ng-disabled="{{vm.isReadonly}}">'
                            + '{{vm.value}} <span class="caret"></span>'
                          + '</button>'
                          + '<ul class="uib-dropdown-menu" role="menu" aria-labelledby="btn-append-to-body">'
                            + '<li role="menuitem" ng-repeat="dropdownItem in vm.source" ng-click="vm.setValue(dropdownItem)"><a ng-click="vm.preventDefault($event)" href="##">{{dropdownItem.text}}</a></li>'
                          + '</ul>'
                          + '<input id="{{vm.controlId}}" name="{{vm.controlId}}" ng-model="vm.model" type="hidden" value ng-required="{{vm.isRequired}}"/>'
                        + '</div>'
                    + '</div>',
            controllerAs: 'vm',
            controller: controller,
            bindToController: true
        };

        return directive;

        function controller() {
            var vm = this;
            vm.value = 'Selecione...'; //default text
            vm.setValue = function (dropdownItem) {
                vm.value = dropdownItem.text;
                vm.model = dropdownItem.id;
            };

            //para evitar alteraçao do hash do URL
            vm.preventDefault = function (event) {
                event.preventDefault();

            }
        }
    }

})();