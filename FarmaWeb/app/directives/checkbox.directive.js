(function () {
    'use strict';

    angular
        .module('FarmaciaApp')
        .directive('customCheckbox', checkbox);

    function checkbox() {
        var directive = {
            restrict: 'E',
            replace: true,
            scope: {
                label: '@',
                model: '=',
                controlId: '@',
                type: '@',
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
                '<div class="{{vm.cssClass}} checkbox" >' +
                    '<label>' +
                        '<input type="checkbox" ng-model="vm.model" class="form-control" id="{{vm.controlId}}" name="{{vm.controlId}}" ng-disabled="vm.isReadonly"/>{{vm.label}}' +
                    '</label>' +
                '</div>',
            controllerAs: 'vm',
            controller: controller,
            bindToController: true
        };

        return directive;

        function controller() {
            var vm = this;
        }
    }

})();