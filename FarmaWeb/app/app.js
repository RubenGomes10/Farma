﻿(function () {
    'use strict';

    angular.module('FarmaciaApp', ['ngRoute', 'ngResource', 'smart-table'])
    .config(function ($routeProvider) {
        //se tiver aqui os controllers não é preciso por no HTML
        $routeProvider.when("/farmacias", {
            controller: "farmaciasController",
            templateUrl: "/app/views/farmaciasList.html",
            controllerAs: 'vm'
        }).when("/distritos", {
            controller: "distritosController",
            templateUrl: "/app/views/distritosList.html",
            controllerAs: 'vm'
        });
        $routeProvider.otherwise({ redirectTo: "/farmacias" });
    })
})();