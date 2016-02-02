(function () {
    'use strict';

    angular.module('FarmaciaApp', [
        'ui.router',
        'ui.bootstrap',
        'smart-table',
        'ngAnimate',
        'LocalStorageModule',
        'angularSpinner'
    ])
    .config(appConfig)
    .run(run);

    appConfig.$inject = ['$stateProvider', '$urlRouterProvider', '$httpProvider'];

    function appConfig($stateProvider, $urlRouterProvider, $httpProvider) {
        $httpProvider.interceptors.push('authInterceptorService');
        $urlRouterProvider.otherwise('/farmacia');
        //se tiver aqui os controllers não é preciso por no HTML
        //o controller As é para não esquecer para depois se usar o vm dentro do controller
        $stateProvider
        .state('farmacia', {
            url: '/farmacia',
            views: {
                menu: {
                    templateUrl: '/app/views/_menu.html',
                    controller: 'MenuController',
                    controllerAs: 'vm',
                },
                content: {
                    templateUrl: '/app/views/farmacia-list.html',
                    controller: 'FarmaciaListController',
                    controllerAs: 'vm',
                }
            },
            requireLogin: true
        })
        .state('createFarmacia', {
            url: '/createFarmacia',
            views: {
                menu: {
                    templateUrl: '/app/views/_menu.html',
                    controller: 'MenuController',
                    controllerAs: 'vm',
                },
                content: {
                    templateUrl: '/app/views/farmacia-create.html',
                    controller: 'FarmaciaCreateController',
                    controllerAs: 'vm'
                }
            },
            requireLogin: true
        })
        .state('detailFarmacia', {
            url: '/detailFarmacia/:id',
            views: {
                menu: {
                    templateUrl: '/app/views/_menu.html',
                    controller: 'MenuController',
                    controllerAs: 'vm',
                },
                content: {
                    templateUrl: '/app/views/farmacia-detail.html',
                    controller: 'FarmaciaDetailController',
                    controllerAs: 'vm'
                }
            },
            requireLogin: true
        })
        .state('distrito', {
            url: '/distrito',
            views: {
                menu: {
                    templateUrl: '/app/views/_menu.html',
                    controller: 'MenuController',
                    controllerAs: 'vm',
                },
                content: {
                    templateUrl: '/app/views/distrito-list.html',
                    controller: 'DistrictController',
                    controllerAs: 'vm',
                }
            },
            requireLogin: true,
            roles: ['Admin']
        })
        .state('cliente', {
            url: '/cliente',
            views: {
                menu: {
                    templateUrl: '/app/views/_menu.html',
                    controller: 'MenuController',
                    controllerAs: 'vm',
                },
                content: {
                    templateUrl: '/app/views/farmacia-create.html',
                    controller: 'FarmaciaCreateController',
                    controllerAs: 'vm'
                },
            },
            requireLogin: true,
        })
        .state('login', {
            url: '/login',            
            views: {
                content: {
                    templateUrl: '/app/views/login.html',
                    controller: 'LoginController',
                    controllerAs: 'vm'
                }
            },
        }).state('register', {
            url: '/register',
            views: {
                content: {
                    templateUrl: '/app/views/register.html',
                    controller: 'RegisterController',
                    controllerAs: 'vm'
                }
            },
        }).state('notauthorized', {
            url: '/notauthorized',
            views: {
                content: {
                    templateUrl: '/app/views/not-authorized.html',
                    controller: 'NotAuthController',
                    controllerAs: 'vm'
                }
            },
        });
    }

    run.$inject = ['$rootScope', '$state', 'usSpinnerService', 'authService', 'helpers'];
    function run($rootScope, $state, usSpinnerService, authService, helpers) {
        authService.fillData();
        $rootScope.$on('$stateChangeStart', function (event, toState, toParams, fromState, fromParams) {
            usSpinnerService.spin('spinner');
            if (toState.requireLogin && authService.authModel.isAuthenticated == false) {
                event.preventDefault();
                console.log("You must connect before you access to this url!!");
                usSpinnerService.stop('spinner');
                $state.go('login');
            }
            if (!helpers.checkRole(authService.authModel.roles, toState.roles))
            {
                event.preventDefault();
                console.log("Not authorized");
                usSpinnerService.stop('spinner');
                $state.go('notauthorized');
            }
        });
        $rootScope.$on('$stateChangeSuccess', function (event, toState, toParams, fromState, fromParams) {
            usSpinnerService.stop('spinner');
        });
    }

})();