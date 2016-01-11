(function () {
    'use strict';

    angular.module('FarmaciaApp').controller('MenuController', controller);

    controller.$inject = ['$http', '$state']; //para ir buscar os menus dinamicamente -- Optimização
    function controller($http, $state) {
        /*Variables and Functions declarations*/
        var vm = this;
        vm.displayedCollection = [];

        vm.rowCollection =
            [{ Link: "farmacia", Nome: "Farmácias" },
            { Link: "distrito", Nome: "Distritos" },
            { Link: "cliente", Nome: "Clientes" }];
        vm.state = $state;
    }

})();