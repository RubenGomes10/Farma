(function () {
    'use strict';

    angular.module('FarmaciaApp').controller('menuController', menuController);

    menuController.$inject = ['$http']; //para ir buscar os menus dinamicamente -- Optimização
    function menuController($http) {
        /*Variables and Functions declarations*/
        var vm = this;
        vm.displayedCollection = [];

        vm.rowCollection =
            [{ Link: "farmacias", Nome: "Farmácias" },
            { Link: "distritos", Nome: "Distritos" },
            { Link: "clientes", Nome: "Clientes" }];

        vm.selectedTab = vm.rowCollection[0];
        vm.tabClass = tabClass;
        vm.setSelectedTab = function (tab) {
            vm.selectedTab = tab;
        }
        /*******************END****************/

        function tabClass(tab) {
            if (vm.selectedTab == tab) {
                return "active";
            } else {
                return "";
            }
        }
    }

})();