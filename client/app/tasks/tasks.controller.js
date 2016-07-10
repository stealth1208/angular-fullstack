(function() {
'use strict';

    angular
        .module('appApp')
        .controller('TasksController', Tasks);

    Tasks.$inject = [];
    function Tasks() {
        var vm = this;
        vm.title = 'Tasks';
                
    }
})();