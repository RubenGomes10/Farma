var app = angular.module('FarmaciasApp', ['ngRoute', 'ngResource', 'ui.bootstrap']);
app.config(function ($routeProvider) {

    $routeProvider.when("/farmacias", {
        controller: "farmaciasController",
        templateUrl: "/app/views/farmaciaList.html"
    });
    $routeProvider.otherwise({ redirectTo: "/farmacias" });
})