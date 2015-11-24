(function () {
    'use strict';

    angular.module('FarmaciaApp').controller('menuController', controller);

    controller.$inject = ['$http']; //para ir buscar os menus dinamicamente -- Optimização
    function controller($http) {
        /*Variables and Functions declarations*/
        var vm = this;
        vm.displayedCollection = [];

        vm.rowCollection =
            [{ Link: "farmacia", Nome: "Farmácias" },
            { Link: "distrito", Nome: "Distritos" },
            { Link: "cliente", Nome: "Clientes" }];


        vm.tabClass = tabClass;
        vm.setSelectedTab = setSelectedTab;
        vm.getActiveTab = getActiveTab;
        /*******************END****************/

        function tabClass(tabName) {
            if (vm.getActiveTab() == tabName) {
                return "active";
            }
            else {
                return "";
            }
        }

        function setSelectedTab (tabName) {
            sessionStorage.setItem("activeTab", tabName);
        }

        function getActiveTab() {
            var activeTab = sessionStorage.getItem("activeTab");
            return (typeof (activeTab) === undefined || activeTab !== "null") ? sessionStorage.getItem("activeTab") : vm.rowCollection[0].Nome;
        };
    }

})();