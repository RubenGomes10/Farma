(function () {
    'use strict';

    angular
        .module('FarmaciaApp')
        .directive('inputLength', inputlength)
        .directive('customTextbox', textbox);
        

    function inputlength() {
        var directive = {
            restrict: 'A',
            link: linkfunction
        };

        return directive;

        function linkfunction(scope, elem, attrs) {
            var limit = parseInt(attrs.inputLength);
            elem.bind('keypress', function (e) {
                if (this.value.length >= limit) {
                    e.preventDefault();
                    return false;
                }
            });
        }
    }


    function textbox() {
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
                isReadonly: '=',
                form: '=',
                maxLength: '@'
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
                    '<label for="{{vm.controlId}}">{{vm.label}}</label>' +
                    '<input type="{{vm.type}}" ng-model="vm.model" class="form-control" id="{{vm.controlId}}" ng-readonly="{{vm.isReadonly}}"'+
                        'name="{{vm.controlId}}" ng-required="{{vm.isRequired}}" ng-maxlength="{{vm.maxLength}}" input-length="{{vm.maxLength}}" />' +
                '</div>',
            controllerAs: 'vm',
            controller: controller,
            bindToController: true,
            //link: linkfunction
        };

        return directive;

        function controller() {
            var vm = this;
        }
    }

})();