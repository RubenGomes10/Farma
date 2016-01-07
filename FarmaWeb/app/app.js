(function () {
    'use strict';

    angular.module('FarmaciaApp', ['ui.router', 'ui.bootstrap', 'smart-table', 'ngAnimate'])
    .config(appConfig)
    .run(rootScope);

    appConfig.$inject = ['$stateProvider', '$urlRouterProvider'];

    function appConfig($stateProvider, $urlRouterProvider) {

        $urlRouterProvider.otherwise('/farmacia');
        //se tiver aqui os controllers não é preciso por no HTML
        //o controller As é para não esquecer para depois se usar o vm dentro do controller
        $stateProvider
        .state('farmacia', {
            url: '/farmacia',
            views: {
                menu: {
                    templateUrl: '/app/views/_menu.html',
                    controller: 'menuController',
                    controllerAs: 'vm',
                },
                content: {
                    templateUrl: '/app/views/farmaciaList.html',
                    controller: 'farmaciaListController',
                    controllerAs: 'vm',
                }
            },
        })
        .state('createFarmacia', {
            url: '/createFarmacia',
            views: {
                menu: {
                    templateUrl: '/app/views/_menu.html',
                    controller: 'menuController',
                    controllerAs: 'vm',
                },
                content: {
                    templateUrl: '/app/views/farmaciaCreate.html',
                    controller: 'farmaciaCreateController',
                    controllerAs: 'vm'
                }
            },
        })
        .state('detailFarmacia', {
            url: '/detailFarmacia/:id',
            views: {
                menu: {
                    templateUrl: '/app/views/_menu.html',
                    controller: 'menuController',
                    controllerAs: 'vm',
                },
                content: {
                    templateUrl: '/app/views/farmaciaDetail.html',
                    controller: 'farmaciaDetailController',
                    controllerAs: 'vm'
                }
            },
        })
        .state('distrito', {
            url: '/distrito',
            views: {
                menu: {
                    templateUrl: '/app/views/_menu.html',
                    controller: 'menuController',
                    controllerAs: 'vm',
                },
                content: {
                    templateUrl: '/app/views/distritoList.html',
                    controller: 'districtController',
                    controllerAs: 'vm',
                }
            },
            requireLogin: true,
        })
        .state('cliente', {
            url: '/cliente',
            views: {
                menu: {
                    templateUrl: '/app/views/_menu.html',
                    controller: 'menuController',
                    controllerAs: 'vm',
                },
                content: {
                    templateUrl: '/app/views/farmaciaCreate.html',
                    controller: 'farmaciaCreateController',
                    controllerAs: 'vm'
                }
            },
        })
        .state('login', {
            url: '/login',            
            views: {
                content: {
                    templateUrl: '/app/views/login.html',
                }
            },
        });
    }

    rootScope.$inject = ['$rootScope', '$state'];
    function rootScope($rootScope, $state) {
        $rootScope.baseURL = 'http://localhost:30974/api';
        $rootScope.$on('$stateChangeStart', function (event, toState, toParams, fromState, fromParams) {
            if (toState.requireLogin) {
                event.preventDefault();
                console.log("You must connect before you access to this url!!");
                $state.go('login');
            }
        });
    }

})();