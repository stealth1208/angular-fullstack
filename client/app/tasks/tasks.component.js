(function () {
  'use strict';


  class TasksController {
    constructor() {
      this.title = '';
      this.tasks = [];
      console.log('constructor');
    }
    
    $onInit() {
      var vm = this;
      vm.title = 'Tasks1';
      console.log('onInit');
    }
  }
  angular.module('appApp')
    .component('tasks', {
      templateUrl: 'app/tasks/tasks.html',
      controller: TasksController,
      controllerAs: 'vm'
    });

})();
