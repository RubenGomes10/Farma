﻿(function () {
    'use strict';

    angular.module('FarmaciaApp', ['ui.router', 'ui.bootstrap', 'smart-table', 'ngAnimate'])
    .config(appConfig)

    appConfig.$inject = ['$stateProvider', '$urlRouterProvider'];

    function appConfig($stateProvider, $urlRouterProvider) {

        $urlRouterProvider.otherwise('/farmacia');
        //se tiver aqui os controllers não é preciso por no HTML
        //o controller As é para não esquecer para depois se usar o vm dentro do controller
        $stateProvider
        .state('farmacia', {
            url: '/farmacia',
            templateUrl: '/app/views/farmaciaList.html',
            controller: 'farmaciaListController',
            controllerAs: 'vm'
        })
        .state('createFarmacia', {
            url: '/createFarmacia',
            templateUrl: '/app/views/farmaciaCreate.html',
            controller: 'farmaciaCreateController',
            controllerAs: 'vm'
        })
        .state('detailFarmacia', {
            url: '/detailFarmacia/:id',
            templateUrl: '/app/views/farmaciaDetail.html',
            controller: 'farmaciaDetailController',
            controllerAs: 'vm'
        })
        .state('distrito', {
            url: '/distrito',
            templateUrl: '/app/views/distritoList.html',
            controller: 'districtController',
            controllerAs: 'vm'
        })
        .state('cliente', {
            url: '/cliente',
            templateUrl: '/app/views/farmaciaCreate.html',
            controller: 'farmaciaCreateController',
            controllerAs: 'vm'
        });
    }

})();