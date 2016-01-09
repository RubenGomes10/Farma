(function () {
    'use strict';

    var config = {
        baseURL: 'http://localhost:30974',
        apiURL: 'http://localhost:30974/api'
    }

    angular.module('FarmaciaApp').value('config', config);



})();