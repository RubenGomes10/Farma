﻿(function () {
    'use strict';

    angular.module('FarmaciaApp', ['ui.router', 'ui.bootstrap', 'smart-table'])
    .config(appConfig);

    appConfig.$inject = ['$stateProvider', '$urlRouterProvider'];
        
    function appConfig ($stateProvider, $urlRouterProvider) {

        $urlRouterProvider.otherwise('/farmacias');
        //se tiver aqui os controllers não é preciso por no HTML
        //o controller As é para não esquecer para depois se usar o vm dentro do controller
        $stateProvider
        .state('farmacias', {
            url: '/farmacias',
            templateUrl: '/app/views/farmaciasList.html',
            controller: 'farmaciasController',
            controllerAs: 'vm'
        })
        .state('createFarmacias', {
            url: '/farmaciasForm',
            templateUrl: '/app/views/farmaciasForm.html',
            controller: 'farmaciasController',
            controllerAs: 'vm'
        })
        .state('distritos', {
            url: '/distritos',
            templateUrl: '/app/views/distritosList.html',
            controller: 'distritosController',
            controllerAs: 'vm'
        })
        .state('clientes', {
            url: '/clientes',
            templateUrl: '/app/views/farmaciasForm.html',
            controller: 'farmaciasController',
            controllerAs: 'vm'
        });
    }

})();