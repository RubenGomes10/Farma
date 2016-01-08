(function () {
    'use strict';

    angular.module('FarmaciaApp').animation('enter-slide', enterslide);

    function enterslide() {
        return {
            setup: function (element) {
                element.hide();
            },
            start: function (element, done, memo) {
                try {
                    element.slideDown(function () {
                        done();
                    });
                }
                catch (ex) { }
            }
        };
    }
})();