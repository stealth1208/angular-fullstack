(function () {
  'use strict';


  class TaskOneController {
    // constructor() {
    //   this.title = '';
    //   this.tasks = [];
    //   console.log('constructor');
    // }

    $onInit() {
			var vm = this;
      vm.items = ['1', '2', '3'];
    }
  }
  angular.module('appApp')
    .component('taskOne', {
      templateUrl: 'app/tasks/task1/taskOne.html',
      controller: TaskOneController,
      controllerAs: 'vm'
    });

})();
