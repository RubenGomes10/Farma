(function () {
    'use strict';

    angular
        .module('FarmaciaApp')
        .directive('customDatepicker', datepicker);

    function datepicker() {
        var directive = {
            restrict: 'E',
            replace: true,
            scope: {
                label: '@',
                model: '=',
                controlId: '@',
                placeholder: '@',
                min: '=',
                max: '=',
                isRequired: '@',
                cssClass: '@',
                form: '=',
                isReadonly: '='
            },
            /*O ng-model serve para actualizar directamente o valor no controller quando há alterações em inputs;
            * Para as validações tem que se ter o name = id;
            * O Scope acima definido cria um novo scope isolado com as propriedades que escolhemos
            * o @ é para strings, o = é para propriedades (2 way binding) e o & é para métodos
            * se fizermos scope = true usamos o scope pai com todas as propriedades do mesmo
            * ATENÇÂO: O NAME NO INPUT É OBRIGATÓRIO PARA AS VALIDAÇÔES DO FORM
            */
            template:
                    '<div class="{{vm.cssClass}}" ng-class="{\'has-error\': vm.form.$submitted && vm.form.{{vm.controlId}}.$invalid}">' +
                        '<label for="{{vm.controlId}}" class="control-label">{{vm.label}}</label>' +
                        '<p class="input-group">' +
                            '<input placeholder="{{vm.placeholder}}" type="text" min-date="vm.min" max-date="vm.max"' +
                                ' class="form-control" uib-datepicker-popup="dd/MM/yyyy" ng-model="vm.model"' +
                                ' show-weeks="false" is-open="vm.flag" datepicker-options="dateOptions"' +
                                ' show-button-bar="false" id="{{vm.controlId}}" name="{{vm.controlId}}"' +
                                ' ng-required="{{vm.isRequired}}" date-model-format ng-readonly="{{vm.isReadonly}}" />' +
                            '<span class="input-group-btn" >' +
                                '<button type="button" class="btn btn-default datepicker-position glyph-button"' +
                                        'ng-click="vm.toggleDate($event)" ng-disabled="{{vm.isReadonly}}">' +
                                    '<i class="glyphicon glyphicon-calendar"></i>' +
                                '</button>' +
                            '</span>' +
                        '</p>' +
                    '</div>',
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