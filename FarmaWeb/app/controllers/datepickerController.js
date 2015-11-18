(function () {
    'use strict';

    angular
        .module('FarmaciaApp')
        .controller('datepickerController', datepickerController);

    //datepickerController.$inject = ['ngAnimate']; 

    function datepickerController() {
        /* jshint validthis:true */
        var vm = this;
        vm.title = 'datepickerController';
        vm.today = function () {
            vm.dt = new Date();
        };
        vm.today();

        vm.clear = function () {
            vm.dt = null;
        };

        // Disable weekend selection
        vm.disabled = function (date, mode) {
            return (mode === 'day' && (date.getDay() === 0 || date.getDay() === 6));
        };

        vm.toggleMin = function () {
            vm.minDate = vm.minDate ? null : new Date();
        };
        vm.toggleMin();
        vm.maxDate = new Date(2020, 5, 22);

        vm.open = function ($event) {
            vm.status.opened = true;
        };

        vm.setDate = function (year, month, day) {
            vm.dt = new Date(year, month, day);
        };

        vm.dateOptions = {
            formatYear: 'yy',
            startingDay: 1
        };

        vm.status = {
            opened: false
        };

        vm.format = 'dd/MM/yyyy';

        //var tomorrow = new Date();
        //tomorrow.setDate(tomorrow.getDate() + 1);
        //var afterTomorrow = new Date();
        //afterTomorrow.setDate(tomorrow.getDate() + 2);
        vm.events =
          [
            {
                //date: tomorrow,
                status: 'full'
            },
            {
                //date: afterTomorrow,
                status: 'partially'
            }
          ];

        //vm.getDayClass = function (date, mode) {
        //    if (mode === 'day') {
        //        var dayToCheck = new Date(date).setHours(0, 0, 0, 0);

        //        for (var i = 0; i < vm.events.length; i++) {
        //            var currentDay = new Date(vm.events[i].date).setHours(0, 0, 0, 0);

        //            if (dayToCheck === currentDay) {
        //                return vm.events[i].status;
        //            }
        //        }
        //    }

        //    return '';
        //};

    }
})();
