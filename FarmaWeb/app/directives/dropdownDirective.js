(function () {
    'use strict';

    angular
        .module('FarmaciaApp')
        .directive('customDropdown', dropdown);

    function dropdown() {
        var directive = {
            restrict: 'EA',
            scope: {
                label: '@',
                //clientType: '=',
                model: '=',
                controlId: '@',
                isRequired: '@',
                cssClass: '@',
                src: '='
            },
            template:
                    '<label for="tipoCliente">{{vm.label}}</label>'
                    + '<div class="btn-group" uib-dropdown>'
                      + '<button id="vm.controlId" type="button" class="btn btn-default" uib-dropdown-toggle ng-disabled="disabled">'
                        +   '{{vm.clientType}} <span class="caret"></span>'
                      +'</button>'
                      +'<ul class="uib-dropdown-menu" role="menu" aria-labelledby="btn-append-to-body">'
                        +'<li role="menuitem" ng-repeat="client in vm.src" ng-click="vm.setClient(client)"><a href="#">{{client.type}}</a></li>'
                      +'</ul>'
                    +'</div>',
            controllerAs: 'vm',
            controller: controller,
            bindToController: true
        };

        return directive;

        function controller() {
            var vm = this;
            vm.clientType = 'Selecione...';
            vm.setClient = function (client) {
                vm.clientType = client.type;
                vm.model = client.id;
            };
        }
    }

})();